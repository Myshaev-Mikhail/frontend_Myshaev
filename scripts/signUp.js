document.addEventListener('DOMContentLoaded', function() {
    const openFormButton = document.getElementById('openModalBtn');
    const modalOverlay = document.getElementById('modalOverlay');
    const overlay = document.querySelector('.overlay');

    openFormButton.addEventListener('click', function() {
        modalOverlay.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    document.getElementById('okBtn').addEventListener('click', function() {
        closeModal();
    });

    document.getElementById('cancelBtn').addEventListener('click', function() {
        closeModal();
    });

    overlay.addEventListener('click', function(event) {
        if (event.target === overlay) {
            closeModal();
        }
    });

    function closeModal() {
        modalOverlay.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
});