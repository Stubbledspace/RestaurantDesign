// Slide-in animations for logo and navigation bar
document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo');
    const nav = document.querySelector('.navigation');

    // Logo slide-in animation
    logo.style.opacity = '1';
    logo.style.transform = 'translateX(0)';

    // Navigation bar slide-in animation
    setTimeout(() => {
        nav.style.opacity = '1';
        nav.style.transform = 'translateX(0)';
    }, 300); // Delay for smoother sequential animation
});