// Main JavaScript for Portfolio

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li');
const header = document.querySelector('header');
const sections = document.querySelectorAll('.section');
const navItems = document.querySelectorAll('.nav-links a');
const contactForm = document.getElementById('contactForm');

// Toggle Mobile Navigation
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    
    // Animate nav items
    navLinksItems.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
});

// Close mobile navigation when clicking on a nav item
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        
        navLinksItems.forEach(link => {
            link.style.animation = '';
        });
    });
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(8, 8, 33, 0.95)';
        header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.backgroundColor = 'rgba(8, 8, 33, 0.7)';
        header.style.boxShadow = 'none';
    }
});

// Active Navigation on Scroll
window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// Form Submission
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Simple form validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Form submission logic would normally go here
        // For this demo, we'll just show a success message
        
        // Clear form fields
        contactForm.reset();
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.classList.add('success-message');
        successMessage.innerHTML = 'Your message has been sent successfully!';
        contactForm.parentNode.appendChild(successMessage);
        
        // Remove success message after 3 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 3000);
    });
}

// Animate elements on scroll
document.addEventListener('DOMContentLoaded', () => {
    // Add animation classes to skill bars when they become visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.skill').forEach(skill => {
        observer.observe(skill);
    });
    
    // Project cards animation
    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.style.animation = `fadeInUp 0.6s ease-out forwards ${index * 0.2}s`;
        card.style.opacity = '0';
    });
});

// Animation for project cards
document.addEventListener('DOMContentLoaded', () => {
    // Add animation class to project cards when they enter the viewport
    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.project-card').forEach(card => {
        projectObserver.observe(card);
        card.classList.add('hidden');
    });
});

// Custom cursor effect (purely aesthetic)
const createCursor = () => {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });
    
    document.addEventListener('mousedown', () => {
        cursor.classList.add('click');
        setTimeout(() => {
            cursor.classList.remove('click');
        }, 500);
    });
};

// Only create custom cursor for non-touch devices
if (!('ontouchstart' in window)) {
    createCursor();
}

// Add scroll to top button
const createScrollTopButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.classList.add('scroll-top');
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            button.classList.add('show');
        } else {
            button.classList.remove('show');
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
};

createScrollTopButton();

// Add a CSS class for the scroll top button
const style = document.createElement('style');
style.innerHTML = `
    .scroll-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--primary-color);
        color: var(--background-color);
        border: none;
        font-size: 24px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
    }
    
    .scroll-top.show {
        opacity: 1;
        visibility: visible;
    }
    
    .scroll-top:hover {
        transform: translateY(-5px);
        box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
    }
    
    .custom-cursor {
        position: fixed;
        width: 20px;
        height: 20px;
        border: 2px solid var(--primary-color);
        border-radius: 50%;
        pointer-events: none;
        transform: translate(-50%, -50%);
        z-index: 9999;
        transition: width 0.3s, height 0.3s, border-color 0.3s;
    }
    
    .custom-cursor.click {
        width: 40px;
        height: 40px;
        border-color: var(--tertiary-color);
        transition: width 0.1s, height 0.1s, border-color 0.1s;
    }
    
    .hidden {
        opacity: 0;
        transform: translateY(50px);
    }
    
    .show {
        opacity: 1;
        transform: translateY(0);
        transition: all 0.6s ease;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes navLinkFade {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .success-message {
        background-color: rgba(0, 255, 128, 0.1);
        color: #00ff80;
        padding: 15px;
        border-radius: 5px;
        margin-top: 20px;
        text-align: center;
        animation: fadeIn 0.5s ease-in-out;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);
