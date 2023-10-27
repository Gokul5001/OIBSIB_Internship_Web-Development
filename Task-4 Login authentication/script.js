// Function to register a user
function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    if (username && password) {
        const users = JSON.parse(localStorage.getItem('users')) || {};
        if (!users[username]) {
            // Store user data securely (in a real-world app, use bcrypt to hash the password)
            users[username] = password;
            localStorage.setItem('users', JSON.stringify(users));

            alert('Registration successful. You can now log in.');
        } else {
            alert('Username already exists. Please choose a different one.');
        }
    } else {
        alert('Please enter a username and password.');
    }
}

// Function to log in a user
function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (username && password) {
        const users = JSON.parse(localStorage.getItem('users')) || {};
        const storedPassword = users[username];

        if (storedPassword === password) {
            // Successful login
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('registerForm').style.display = 'none';
            document.getElementById('logoutButton').style.display = 'block';
            document.getElementById('message').style.display = 'block';
            document.getElementById('message').innerHTML = 'Welcome, ' + username +  '! Click <a href="index2.html">here</a> to visit my portfolio.';
        } else {
            alert('Incorrect username or password. Please try again.');
        }
    } else {
        alert('Please enter a username and password.');
    }
}
function toggleForm(formId) {
    var registerForm = document.getElementById('registerForm');
    var loginForm = document.getElementById('loginForm');
    if (formId === 'registerForm') {
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
    } else {
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    }
}

// Function to log out a user
function logout() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'block';
    document.getElementById('logoutButton').style.display = 'none';
    document.getElementById('message').style.display = 'none';
}
