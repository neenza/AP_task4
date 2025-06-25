// To-Do List App with Local Storage

// DOM Elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
const filterBtns = document.querySelectorAll('.filter-btn');
const clearCompletedBtn = document.getElementById('clearCompleted');
const emptyState = document.getElementById('emptyState');
const totalTasksCount = document.getElementById('totalTasks');
const activeTasksCount = document.getElementById('activeTasks');
const completedTasksCount = document.getElementById('completedTasks');

// Task array to store all tasks
let tasks = [];

// Current filter
let currentFilter = 'all';

// Initialize the app
function init() {
    // Load tasks from local storage
    loadTasks();
    
    // Display tasks
    renderTasks();
    
    // Add event listeners
    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
    
    clearCompletedBtn.addEventListener('click', clearCompleted);
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            setFilter(btn.dataset.filter);
        });
    });
    
    // Add fancy placeholder animation to the input
    const inputPlaceholder = taskInput.getAttribute('placeholder');
    let i = 0;
    
    setInterval(() => {
        taskInput.setAttribute('placeholder', inputPlaceholder.substring(0, i));
        i = (i + 1) % (inputPlaceholder.length + 1);
    }, 150);
}

// Load tasks from local storage
function loadTasks() {
    const storedTasks = localStorage.getItem('futuristicTasks');
    
    if (storedTasks) {
        try {
            tasks = JSON.parse(storedTasks);
        } catch (error) {
            console.error('Error parsing tasks from localStorage:', error);
            tasks = [];
        }
    }
}

// Save tasks to local storage
function saveTasks() {
    localStorage.setItem('futuristicTasks', JSON.stringify(tasks));
}

// Add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        // Add shake animation to input
        taskInput.classList.add('shake');
        setTimeout(() => {
            taskInput.classList.remove('shake');
        }, 500);
        return;
    }
    
    // Create new task object
    const newTask = {
        id: Date.now().toString(),
        text: taskText,
        completed: false,
        createdAt: new Date().toISOString()
    };
    
    // Add to tasks array
    tasks.unshift(newTask);
    
    // Save to local storage
    saveTasks();
    
    // Clear input
    taskInput.value = '';
    
    // Render tasks
    renderTasks();
}

// Render tasks
function renderTasks() {
    let filteredTasks = [];
    
    // Apply filter
    switch (currentFilter) {
        case 'active':
            filteredTasks = tasks.filter(task => !task.completed);
            break;
        case 'completed':
            filteredTasks = tasks.filter(task => task.completed);
            break;
        default:
            filteredTasks = [...tasks];
    }
    
    // Clear current list
    taskList.innerHTML = '';
    
    // Show/hide empty state
    if (filteredTasks.length === 0) {
        emptyState.style.display = 'block';
    } else {
        emptyState.style.display = 'none';
    }
    
    // Create task elements
    filteredTasks.forEach(task => {
        const taskElement = createTaskElement(task);
        taskList.appendChild(taskElement);
    });
    
    // Update statistics
    updateStats();
}

// Create a task element
function createTaskElement(task) {
    const taskElement = document.createElement('li');
    taskElement.classList.add('todo-item');
    taskElement.dataset.id = task.id;
    
    if (task.completed) {
        taskElement.classList.add('completed');
    }
    
    taskElement.classList.add('created-animation');
    
    // Add task elements
    taskElement.innerHTML = `
        <input type="checkbox" class="todo-checkbox" ${task.completed ? 'checked' : ''}>
        <span class="todo-text">${escapeHtml(task.text)}</span>
        <div class="todo-actions">
            <button class="todo-edit"><i class="fas fa-pen"></i></button>
            <button class="todo-delete"><i class="fas fa-trash"></i></button>
        </div>
    `;
    
    // Add event listeners
    const checkbox = taskElement.querySelector('.todo-checkbox');
    checkbox.addEventListener('change', () => {
        toggleTaskCompletion(task.id);
    });
    
    const editBtn = taskElement.querySelector('.todo-edit');
    editBtn.addEventListener('click', () => {
        editTask(task.id);
    });
    
    const deleteBtn = taskElement.querySelector('.todo-delete');
    deleteBtn.addEventListener('click', () => {
        deleteTask(task.id, taskElement);
    });
    
    return taskElement;
}

// Toggle task completion
function toggleTaskCompletion(id) {
    const taskIndex = tasks.findIndex(task => task.id === id);
    
    if (taskIndex !== -1) {
        tasks[taskIndex].completed = !tasks[taskIndex].completed;
        saveTasks();
        renderTasks();
    }
}

// Edit task
function editTask(id) {
    const task = tasks.find(task => task.id === id);
    
    if (task) {
        const newText = prompt('Edit task:', task.text);
        
        if (newText !== null && newText.trim() !== '') {
            task.text = newText.trim();
            saveTasks();
            renderTasks();
        }
    }
}

// Delete task with animation
function deleteTask(id, taskElement) {
    // Add delete animation
    taskElement.classList.add('deleted-animation');
    
    // Remove task after animation completes
    setTimeout(() => {
        // Remove task from array
        tasks = tasks.filter(task => task.id !== id);
        
        // Save to local storage
        saveTasks();
        
        // Render tasks
        renderTasks();
    }, 300);
}

// Clear all completed tasks
function clearCompleted() {
    // Filter out completed tasks
    tasks = tasks.filter(task => !task.completed);
    
    // Save to local storage
    saveTasks();
    
    // Render tasks
    renderTasks();
}

// Set the current filter
function setFilter(filter) {
    currentFilter = filter;
    
    // Update active class on filter buttons
    filterBtns.forEach(btn => {
        if (btn.dataset.filter === filter) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Render tasks with the new filter
    renderTasks();
}

// Update statistics
function updateStats() {
    const totalTasks = tasks.length;
    const activeTasks = tasks.filter(task => !task.completed).length;
    const completedTasks = tasks.filter(task => task.completed).length;
    
    totalTasksCount.textContent = totalTasks;
    activeTasksCount.textContent = activeTasks;
    completedTasksCount.textContent = completedTasks;
}

// Helper function for HTML escaping (prevent XSS)
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Style for shake animation
const shakeStyle = document.createElement('style');
shakeStyle.innerHTML = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
    
    .shake {
        animation: shake 0.5s;
    }
`;
document.head.appendChild(shakeStyle);

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
