document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.nav-bar');
    
    // Check if the navbar element is found
    if (!navbar) {
        console.error('Navbar element not found');
        return;
    }

    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            // Scrolling down
            navbar.style.top = '-60px'; // Hide the navbar (adjust the value if needed)
        } else {
            // Scrolling up
            navbar.style.top = '0'; // Show the navbar
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For mobile or negative scrolling
    });
});