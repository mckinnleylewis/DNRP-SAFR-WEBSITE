document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Replace these with your actual login credentials
    const correctUsername = 'SAFRCOMMAND';
    const correctPassword = 'SAFR24';

    if (username === correctUsername && password === correctPassword) {
        // Store login state in sessionStorage
        sessionStorage.setItem('loggedIn', 'true');
        window.location.href = 'log.html'; // Redirect to the log page
    } else {
        alert('Invalid username or password.');
    }
});
