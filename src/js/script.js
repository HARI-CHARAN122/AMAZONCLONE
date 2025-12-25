// Back to top functionality
document.querySelector('.back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Search functionality
const searchInput = document.querySelector('.header-search input');
const searchButton = document.querySelector('.header-search button');

searchButton.addEventListener('click', function() {
    if (searchInput.value.trim() !== '') {
        alert('Search functionality would be implemented here');
        searchInput.value = '';
    }
});

searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && searchInput.value.trim() !== '') {
        alert('Search functionality would be implemented here');
        searchInput.value = '';
    }
});

// Cart interaction
const cart = document.querySelector('.cart');
cart.addEventListener('click', function() {
    alert('Cart functionality would be implemented here');
});

// Product card hover effect
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});
