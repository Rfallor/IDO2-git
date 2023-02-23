function validateForm() {
    // Get input field values
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Validate username
    if (username === '' || !/^[a-zA-Z0-9]+$/.test(username)) {
        console.log('Form submission failed: Username must not be empty, and must contain only letters and numbers.');
        usernameInput.focus();
        return;
    }

    // Validate email
    if (email === '' || !/\S+@\S+\.\S+/.test(email)) {
        console.log('Form submission failed: Email must not be empty, and must contain "@" character.');
        emailInput.focus();
        return;
    }

    // Validate password
    if (password === '' || password.length < 8) {
        console.log('Form submission failed: Password must not be empty, and must be at least 8 characters long.');
        passwordInput.focus();
        return;
    }

    // All input fields are valid
    console.log('Form submitted successfully.');
}

