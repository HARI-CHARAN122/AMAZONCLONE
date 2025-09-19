// Amazon Clone JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Sidebar functionality
    const hamburger = document.querySelector('.nav-hamburger');
    const sidebar = document.querySelector('.sidebar');
    const sidebarBackdrop = document.querySelector('.sidebar-backdrop');

    function openSidebar() {
        sidebar.classList.add('active');
        sidebarBackdrop.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeSidebar() {
        sidebar.classList.remove('active');
        sidebarBackdrop.classList.remove('active');
        document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', openSidebar);
    sidebarBackdrop.addEventListener('click', closeSidebar);

    // Back to top functionality
    const backToTopButton = document.querySelector('.footer-top button');
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Search functionality
    const searchForm = document.querySelector('.header-search');
    const searchInput = searchForm.querySelector('input');
    const searchButton = searchForm.querySelector('button');
    const searchCategory = searchForm.querySelector('select');

    searchButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (searchInput.value.trim()) {
            alert(`Searching for "${searchInput.value}" in ${searchCategory.value} category`);
            searchInput.value = '';
        }
    });

    // Cart count update
    const cartCount = document.querySelector('.cart-count');
    let count = 0;
    
    document.getElementById('nav-cart').addEventListener('click', () => {
        count++;
        cartCount.textContent = count;
    });

    // Carousel functionality
    const carousel = document.querySelector('.carousel');
    const slides = carousel.querySelectorAll('.carousel-slide');
    const prevButton = carousel.querySelector('.prev');
    const nextButton = carousel.querySelector('.next');
    const dots = carousel.querySelectorAll('.nav-dot');
    let currentSlide = 0;
    let slideInterval;

    function updateSlides() {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlides();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlides();
    }

    function startSlideshow() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function stopSlideshow() {
        clearInterval(slideInterval);
    }

    prevButton.addEventListener('click', () => {
        prevSlide();
        stopSlideshow();
        startSlideshow();
    });

    nextButton.addEventListener('click', () => {
        nextSlide();
        stopSlideshow();
        startSlideshow();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlides();
            stopSlideshow();
            startSlideshow();
        });
    });

    carousel.addEventListener('mouseenter', stopSlideshow);
    carousel.addEventListener('mouseleave', startSlideshow);

    startSlideshow();

    // Recommendation rows scroll functionality
    const recommendationRows = document.querySelectorAll('.recommendation-row');
    
    recommendationRows.forEach(row => {
        const container = row.querySelector('.product-scroll-container');
        const leftButton = row.querySelector('.scroll-button.left');
        const rightButton = row.querySelector('.scroll-button.right');
        const scrollAmount = 200;

        // Hide left button initially
        leftButton.style.display = 'none';

        // Scroll left
        leftButton.addEventListener('click', () => {
            container.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        // Scroll right
        rightButton.addEventListener('click', () => {
            container.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });

        // Update button visibility based on scroll position
        container.addEventListener('scroll', () => {
            leftButton.style.display = container.scrollLeft > 0 ? 'block' : 'none';
            rightButton.style.display = 
                (container.scrollWidth - container.clientWidth - container.scrollLeft) > 1 
                    ? 'block' 
                    : 'none';
        });

        // Initial check for right button
        rightButton.style.display = 
            (container.scrollWidth - container.clientWidth) > 0 
                ? 'block' 
                : 'none';
    });

    // Random product images with proper sizing
    const productImages = document.querySelectorAll('.product-card img');
    productImages.forEach(img => {
        const randomId = Math.floor(Math.random() * 1000);
        img.src = `https://picsum.photos/300/300?random=${randomId}`;
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
    });

    // Account dropdown positioning
    const accountNav = document.getElementById('nav-account');
    const dropdown = accountNav.querySelector('.account-dropdown');

    accountNav.addEventListener('mouseenter', () => {
        const rect = accountNav.getBoundingClientRect();
        dropdown.style.right = '0';
        dropdown.style.top = rect.height + 'px';
    });
});