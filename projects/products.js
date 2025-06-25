// Product Listing Page with Filtering and Sorting

// Product data
const productsData = [
    {
        id: 1,
        name: "NeoWatch X9",
        category: "wearable",
        description: "The future of wearable tech with holographic display, health monitoring, and ambient intelligence. Features pulse tracking, sleep analysis, and 3D gesture control.",
        price: 299.99,
        originalPrice: 349.99,
        rating: 4.8,
        reviewCount: 128,
        isNew: true,
        isSale: true,
        features: [
            "Holographic 3D display",
            "Advanced health monitoring",
            "Voice and gesture control",
            "7-day battery life",
            "Water and shock resistant"
        ],
        image: "https://images.unsplash.com/photo-1704783354115-a59dcf0bd2ac?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Smartwatch
    },
    {
        id: 2,
        name: "HomeHub 2000",
        category: "smart-home",
        description: "The central nervous system for your smart home. Controls lighting, climate, security, and entertainment with advanced AI assistance and energy management.",
        price: 499.99,
        originalPrice: 499.99,
        rating: 4.7,
        reviewCount: 84,
        isNew: false,
        isSale: false,
        features: [
            "Unified smart home control",
            "AI-powered energy optimization",
            "Voice recognition for all family members",
            "Advanced security protocols",
            "Compatible with all major smart devices"
        ],
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80" // Smart Home
    },
    {
        id: 3,
        name: "HoloLens Pro",
        category: "vr",
        description: "Next-generation mixed reality headset bringing digital content into your physical world. Ultra-lightweight design with 4K resolution per eye and 120° field of view.",
        price: 899.99,
        originalPrice: 999.99,
        rating: 4.9,
        reviewCount: 56,
        isNew: true,
        isSale: true,
        features: [
            "Full-room spatial mapping",
            "Gesture and eye tracking",
            "8-hour battery life",
            "Wireless connectivity",
            "Developer-friendly platform"
        ],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80" // VR Headset
    },
    {
        id: 4,
        name: "SoundSphere X1",
        category: "audio",
        description: "Spatial audio earbuds with 360° sound positioning and adaptive noise cancellation. Custom-tunes to your ear shape for optimal comfort and sound delivery.",
        price: 199.99,
        originalPrice: 249.99,
        rating: 4.6,
        reviewCount: 210,
        isNew: false,
        isSale: true,
        features: [
            "Spatial audio technology",
            "Active noise cancellation",
            "Custom ear mapping",
            "30-hour battery life with case",
            "Voice assistant integration"
        ],
        image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80" // Earbuds
    },
    {
        id: 5,
        name: "NanoProbe Scanner",
        category: "gadget",
        description: "Portable molecular scanner that can analyze the composition of food, medicine, and materials. Perfect for those with allergies or dietary restrictions.",
        price: 149.99,
        originalPrice: 149.99,
        rating: 4.3,
        reviewCount: 68,
        isNew: true,
        isSale: false,
        features: [
            "Molecular composition analysis",
            "Allergen detection",
            "Nutritional breakdown",
            "Material identification",
            "Smartphone app integration"
        ],
        image: "https://images.unsplash.com/photo-1726255294277-57c46883bd94?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Scanner/Gadget (generic tech)
    },
    {
        id: 8,
        name: "RealityCapture Camera",
        category: "vr",
        description: "360° camera that captures immersive content for virtual reality experiences. Features automatic stitching and depth sensing for 3D reconstruction.",
        price: 459.99,
        originalPrice: 599.99,
        rating: 4.7,
        reviewCount: 42,
        isNew: true,
        isSale: true,
        features: [
            "8K 360° video capture",
            "Depth sensing technology",
            "Real-time stitching",
            "Spatial audio recording",
            "Direct VR streaming capability"
        ],
        image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" // 360 Camera
    },
    {
        id: 9,
        name: "QuantumSound Speaker",
        category: "audio",
        description: "Revolutionary speaker using quantum resonance to deliver unprecedented sound clarity and richness. Adapts to room acoustics for optimal sound dispersion.",
        price: 349.99,
        originalPrice: 349.99,
        rating: 4.8,
        reviewCount: 89,
        isNew: true,
        isSale: false,
        features: [
            "Quantum resonance technology",
            "Adaptive room acoustics",
            "Multi-room synchronization",
            "High-fidelity audio reproduction",
            "Voice assistant compatibility"
        ],
        image: "https://images.unsplash.com/photo-1725266588224-9efcc3d903dd?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Speaker
    },
    {
        id: 10,
        name: "PocketProjector Neo",
        category: "gadget",
        description: "Miniature laser projector that fits in your pocket. Projects a 100-inch 4K display on any surface with auto-focus and keystoning.",
        price: 399.99,
        originalPrice: 449.99,
        rating: 4.2,
        reviewCount: 63,
        isNew: false,
        isSale: true,
        features: [
            "Ultra-compact design",
            "Laser 4K projection",
            "Auto-focus and keystoning",
            "3-hour battery life",
            "Wireless content streaming"
        ],
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" // Projector
    },
    {
        id: 11,
        name: "SleepTech Pillow",
        category: "smart-home",
        description: "Smart pillow that monitors and improves sleep quality with adaptive cooling, heating, and gentle wake-up vibrations. Connects to your sleep app.",
        price: 159.99,
        originalPrice: 199.99,
        rating: 4.4,
        reviewCount: 112,
        isNew: false,
        isSale: true,
        features: [
            "Sleep pattern monitoring",
            "Temperature regulation",
            "Gentle wake-up vibrations",
            "Pressure adjustment",
            "Sleep quality reporting"
        ],
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" // Smart Pillow
    },
    {
        id: 12,
        name: "Neural Interface Headband",
        category: "wearable",
        description: "Non-invasive neural interface that allows mind control of compatible devices. Great for accessibility applications and hands-free computing.",
        price: 699.99,
        originalPrice: 799.99,
        rating: 4.1,
        reviewCount: 29,
        isNew: true,
        isSale: true,
        features: [
            "Non-invasive brain-computer interface",
            "Mental command recognition",
            "Adaptive learning algorithms",
            "Developer API access",
            "Medical-grade sensors"
        ],
        image: "https://plus.unsplash.com/premium_photo-1729867698228-2db620b0fe30?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Neural Headband
    },
    {
        id: 13,
        name: "HyperGlove Controller",
        category: "vr",
        description: "Haptic feedback gloves that bring realistic touch sensations to virtual reality. Experience texture, resistance, and temperature in the digital world.",
        price: 249.99,
        originalPrice: 299.99,
        rating: 4.6,
        reviewCount: 47,
        isNew: true,
        isSale: true,
        features: [
            "Full haptic feedback system",
            "Temperature simulation",
            "Force and resistance feedback",
            "Fine motor control tracking",
            "8-hour battery life"
        ],
        image: "https://images.unsplash.com/photo-1727386243678-32ffd3426a18?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Haptic Gloves
    },
    {
        id: 14,
        name: "AudioPerfect Headphones",
        category: "audio",
        description: "Over-ear headphones with personalized sound profiles based on your hearing capabilities. Features active noise cancellation and spatial audio.",
        price: 299.99,
        originalPrice: 349.99,
        rating: 4.9,
        reviewCount: 156,
        isNew: false,
        isSale: true,
        features: [
            "Personalized audio profiles",
            "Adaptive noise cancellation",
            "Studio-quality sound reproduction",
            "30-hour battery life",
            "Premium materials and comfort"
        ],
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" // Headphones
    },
    {
        id: 15,
        name: "SecureGate Guardian",
        category: "smart-home",
        description: "Advanced home security system with facial recognition, behavior analysis, and predictive threat detection. Integrates with existing smart home systems.",
        price: 549.99,
        originalPrice: 649.99,
        rating: 4.7,
        reviewCount: 78,
        isNew: true,
        isSale: true,
        features: [
            "AI-powered threat detection",
            "Facial recognition for family members",
            "Behavior pattern analysis",
            "Tamper alerts and backup systems",
            "Remote monitoring and alerts"
        ],
        image: "https://plus.unsplash.com/premium_photo-1682124827126-511adae38f03?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Security Camera
    }
];

// DOM Elements
const productGrid = document.getElementById('productGrid');
const productCountElement = document.getElementById('productCount');
const noResultsElement = document.getElementById('noResults');
const categoryCheckboxes = document.querySelectorAll('input[data-category]');
const ratingCheckboxes = document.querySelectorAll('input[data-rating]');
const minPriceInput = document.getElementById('minPrice');
const maxPriceInput = document.getElementById('maxPrice');
const priceRangeSlider = document.getElementById('priceRange');
const sortBySelect = document.getElementById('sortBy');
const resetFiltersBtn = document.getElementById('resetFilters');
const viewButtons = document.querySelectorAll('.view-btn');
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');
const pageNumbersContainer = document.getElementById('pageNumbers');
const productModal = document.getElementById('productModal');
const closeModal = document.querySelector('.close-modal');

// Pagination variables
let currentPage = 1;
const productsPerPage = 8;
let filteredProducts = [...productsData];

// Initialize the app
function init() {
    // Initial render
    applyFiltersAndSort();
    
    // Event listeners for filters
    categoryCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', applyFiltersAndSort);
    });
    
    ratingCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', applyFiltersAndSort);
    });
    
    minPriceInput.addEventListener('input', updatePriceFilter);
    maxPriceInput.addEventListener('input', updatePriceFilter);
    priceRangeSlider.addEventListener('input', updateSliderValue);
    
    sortBySelect.addEventListener('change', applyFiltersAndSort);
    
    resetFiltersBtn.addEventListener('click', resetFilters);
    
    // Event listeners for view switching
    viewButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            viewButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            if (btn.dataset.view === 'list') {
                productGrid.classList.add('list-view');
            } else {
                productGrid.classList.remove('list-view');
            }
        });
    });
    
    // Pagination event listeners
    prevPageBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderProducts();
        }
    });
    
    nextPageBtn.addEventListener('click', () => {
        const maxPage = Math.ceil(filteredProducts.length / productsPerPage);
        if (currentPage < maxPage) {
            currentPage++;
            renderProducts();
        }
    });
    
    // Modal event listeners
    closeModal.addEventListener('click', closeProductModal);
    window.addEventListener('click', (e) => {
        if (e.target === productModal) {
            closeProductModal();
        }
    });
}

// Apply filters and sort products
function applyFiltersAndSort() {
    // Get selected categories
    const selectedCategories = Array.from(categoryCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.dataset.category);
    
    // Get selected ratings
    const selectedRatings = Array.from(ratingCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => parseInt(checkbox.dataset.rating));
    
    // Get price range
    const minPrice = parseFloat(minPriceInput.value);
    const maxPrice = parseFloat(maxPriceInput.value);
    
    // Filter products
    filteredProducts = productsData.filter(product => {
        // Category filter
        const categoryMatch = selectedCategories.length === 0 || 
                              selectedCategories.includes(product.category);
        
        // Rating filter (match products with rating >= selected)
        const ratingMatch = selectedRatings.length === 0 || 
                            selectedRatings.some(rating => Math.floor(product.rating) >= rating);
        
        // Price filter
        const priceMatch = product.price >= minPrice && product.price <= maxPrice;
        
        return categoryMatch && ratingMatch && priceMatch;
    });
    
    // Sort products
    sortProducts();
    
    // Reset to first page
    currentPage = 1;
    
    // Render the filtered and sorted products
    renderProducts();
}

// Sort products based on selected option
function sortProducts() {
    const sortOption = sortBySelect.value;
    
    switch (sortOption) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'rating-high':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
        case 'name-az':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-za':
            filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case 'featured':
        default:
            // For featured, prioritize new items, then by rating
            filteredProducts.sort((a, b) => {
                if (a.isNew && !b.isNew) return -1;
                if (!a.isNew && b.isNew) return 1;
                return b.rating - a.rating;
            });
    }
}

// Render products with pagination
function renderProducts() {
    // Calculate start and end indices for current page
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = Math.min(startIndex + productsPerPage, filteredProducts.length);
    const currentProducts = filteredProducts.slice(startIndex, endIndex);
    
    // Update product count
    productCountElement.textContent = filteredProducts.length;
    
    // Show/hide no results message
    if (filteredProducts.length === 0) {
        productGrid.style.display = 'none';
        noResultsElement.style.display = 'block';
    } else {
        productGrid.style.display = 'grid';
        noResultsElement.style.display = 'none';
    }
    
    // Clear product grid
    productGrid.innerHTML = '';
    
    // Render each product
    currentProducts.forEach(product => {
        const productElement = createProductElement(product);
        productGrid.appendChild(productElement);
    });
    
    // Update pagination
    updatePagination();
}

// Create a product element
function createProductElement(product) {
    const discount = product.originalPrice > product.price 
        ? Math.round((1 - product.price / product.originalPrice) * 100) 
        : 0;
    
    const productElement = document.createElement('div');
    productElement.classList.add('product-card');
    
    productElement.innerHTML = `
        <div class="product-image">
            ${product.isNew ? '<span class="product-badge new">New</span>' : ''}
            ${discount > 0 ? `<span class="product-badge sale">${discount}% OFF</span>` : ''}
            <img src="${product.image}" alt="${product.name}">
            <div class="quick-view" data-product-id="${product.id}">Quick View</div>
        </div>
        <div class="product-info">
            <div class="product-category">${product.category.replace('-', ' ')}</div>
            <h3 class="product-name">${product.name}</h3>
            <div class="product-rating">
                <div class="stars">
                    ${generateStars(product.rating)}
                </div>
                <span class="count">(${product.reviewCount})</span>
            </div>
            <p class="product-description">${product.description}</p>
            <div class="product-price">
                <span class="current-price">$${product.price.toFixed(2)}</span>
                ${discount > 0 ? `
                    <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
                    <span class="discount">Save ${discount}%</span>
                ` : ''}
            </div>
            <button class="add-to-cart">Add to Cart</button>
        </div>
    `;
    
    // Add quick view event listener
    const quickViewBtn = productElement.querySelector('.quick-view');
    quickViewBtn.addEventListener('click', () => {
        openProductModal(product);
    });
    
    return productElement;
}

// Generate star ratings HTML
function generateStars(rating) {
    let starsHTML = '';
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    // Add half star if needed
    if (halfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    // Add empty stars to make 5 stars total
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    return starsHTML;
}

// Update pagination controls
function updatePagination() {
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    
    // Update prev/next buttons
    prevPageBtn.disabled = currentPage <= 1;
    nextPageBtn.disabled = currentPage >= totalPages;
    
    // Generate page numbers
    pageNumbersContainer.innerHTML = '';
    
    // Determine the range of page numbers to display
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + 4);
    
    // Adjust if we're at the end
    if (endPage - startPage < 4) {
        startPage = Math.max(1, endPage - 4);
    }
    
    // Add first page if not in range
    if (startPage > 1) {
        const pageBtn = createPageButton(1);
        pageNumbersContainer.appendChild(pageBtn);
        
        if (startPage > 2) {
            const ellipsis = document.createElement('span');
            ellipsis.textContent = '...';
            ellipsis.classList.add('page-ellipsis');
            pageNumbersContainer.appendChild(ellipsis);
        }
    }
    
    // Add page numbers in range
    for (let i = startPage; i <= endPage; i++) {
        const pageBtn = createPageButton(i);
        pageNumbersContainer.appendChild(pageBtn);
    }
    
    // Add last page if not in range
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            const ellipsis = document.createElement('span');
            ellipsis.textContent = '...';
            ellipsis.classList.add('page-ellipsis');
            pageNumbersContainer.appendChild(ellipsis);
        }
        
        const pageBtn = createPageButton(totalPages);
        pageNumbersContainer.appendChild(pageBtn);
    }
}

// Create page number button
function createPageButton(pageNum) {
    const pageBtn = document.createElement('button');
    pageBtn.textContent = pageNum;
    pageBtn.classList.add('page-number');
    
    if (pageNum === currentPage) {
        pageBtn.classList.add('active');
    }
    
    pageBtn.addEventListener('click', () => {
        currentPage = pageNum;
        renderProducts();
    });
    
    return pageBtn;
}

// Update price filter when inputs change
function updatePriceFilter() {
    const minVal = parseFloat(minPriceInput.value);
    const maxVal = parseFloat(maxPriceInput.value);
    
    // Ensure min doesn't exceed max
    if (minVal > maxVal) {
        minPriceInput.value = maxVal;
    }
    
    // Update slider value
    priceRangeSlider.value = maxVal;
    
    applyFiltersAndSort();
}

// Update slider value
function updateSliderValue() {
    const value = priceRangeSlider.value;
    maxPriceInput.value = value;
    updatePriceFilter();
}

// Reset all filters to default
function resetFilters() {
    // Reset checkboxes
    categoryCheckboxes.forEach(checkbox => {
        checkbox.checked = true;
    });
    
    ratingCheckboxes.forEach(checkbox => {
        checkbox.checked = true;
    });
    
    // Reset price range
    minPriceInput.value = 0;
    maxPriceInput.value = 1000;
    priceRangeSlider.value = 1000;
    
    // Reset sort
    sortBySelect.value = 'featured';
    
    // Apply filters
    applyFiltersAndSort();
}

// Open product modal
function openProductModal(product) {
    const modalBody = document.querySelector('.modal-body');
    
    modalBody.innerHTML = `
        <div class="modal-product">
            <div class="modal-product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="modal-product-info">
                <h2>${product.name}</h2>
                <div class="modal-product-category">${product.category.replace('-', ' ')}</div>
                <div class="product-rating">
                    <div class="stars">
                        ${generateStars(product.rating)}
                    </div>
                    <span class="count">(${product.reviewCount} reviews)</span>
                </div>
                <div class="modal-product-price">$${product.price.toFixed(2)}</div>
                <p class="modal-product-description">${product.description}</p>
                
                <div class="modal-product-features">
                    <h3>Key Features</h3>
                    <ul class="feature-list">
                        ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="modal-actions">
                    <button class="btn btn-primary">Add to Cart</button>
                    <button class="btn btn-secondary">Add to Wishlist</button>
                </div>
            </div>
        </div>
    `;
    
    productModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close product modal
function closeProductModal() {
    productModal.style.display = 'none';
    document.body.style.overflow = '';
}

// Add CSS for pagination ellipsis
const style = document.createElement('style');
style.innerHTML = `
    .page-ellipsis {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        color: var(--text-color);
    }
`;
document.head.appendChild(style);

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
