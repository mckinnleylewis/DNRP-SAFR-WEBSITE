document.addEventListener('DOMContentLoaded', function () {
    const loggedIn = localStorage.getItem('loggedIn') === 'true';

    if (!loggedIn) {
        window.location.href = 'log.html';
    }
});
