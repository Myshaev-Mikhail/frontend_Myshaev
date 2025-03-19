document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.querySelector('.preloader');

    preloader.style.opacity = '0';
    preloader.style.pointerEvents = 'none';

    setTimeout(function() {
        preloader.style.display = 'none';
    }, 500);
});
