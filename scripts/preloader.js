document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.addEventListener('transitionend', () => {
            preloader.remove();
        });
    }, 2000);
});