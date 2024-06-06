document.addEventListener("DOMContentLoaded", () => {
    const contentDiv = document.getElementById("content");
    let isRegistered = false;

    const routes = {
        home: () => `
            <h1>Home</h1>
            <p>Welcome to the home page!</p>
            ${isRegistered ? `
                <h2>Dynamic List</h2>
                <div class="list-controls">
                    <input type="text" id="itemInput" placeholder="Enter item">
                    <button id="addItemButton">Add Item</button>
                </div>
                <ul id="itemList"></ul>
            ` : '<p>Please register to access the dynamic list.</p>'}
        `,
        about: `
            <h1>About</h1>
            <p>This is the about page.</p>
        `,
        contact: `
            <h1>Contact</h1>
            <p>Contact us at btwitsronit@gmail.com.</p>
        `,
        register: `
            <h2>Registration Form</h2>
            <form id="registrationForm">
                <div class="form-group">
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" required>
                    <span id="usernameError" class="error"></span>
                </div>

                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                    <span id="emailError" class="error"></span>
                </div>

                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required>
                    <span id="passwordError" class="error"></span>
                    <span id="passwordStrength" class="valid"></span>
                </div>

                <button type="submit">Register</button>
            </form>
        `
    };

    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const route = event.target.getAttribute('data-route');
            history.pushState({ route }, '', `#${route}`);
            loadContent(route);
        });
    });

    window.addEventListener('popstate', event => {
        if (event.state && event.state.route) {
            loadContent(event.state.route);
        }
    });

    function loadContent(route) {
        contentDiv.innerHTML = (typeof routes[route] === 'function') ? routes[route]() : routes[route];

        if (route === 'home' && isRegistered) {
            document.getElementById('addItemButton').addEventListener('click', addItem);
        }

        if (route === 'register') {
            const form = document.getElementById("registrationForm");
            form.addEventListener("submit", function(event) {
                event.preventDefault();
                if (validateForm()) {
                    isRegistered = true;
                    alert("Form submitted successfully!");
                    loadContent('home');  // Redirect to home
                }
            });

            const usernameInput = document.getElementById("username");
            const emailInput = document.getElementById("email");
            const passwordInput = document.getElementById("password");

            usernameInput.addEventListener("input", validateUsername);
            emailInput.addEventListener("input", validateEmail);
            passwordInput.addEventListener("input", validatePassword);
        }
    }

    function addItem() {
        const itemInput = document.getElementById("itemInput");
        const itemList = document.getElementById("itemList");
        const itemText = itemInput.value.trim();
        if (itemText !== "") {
            const listItem = document.createElement("li");
            listItem.textContent = itemText;
            itemList.appendChild(listItem);
            itemInput.value = "";
        } else {
            alert("Please enter an item.");
        }
    }

    function validateUsername() {
        const username = document.getElementById("username").value;
        const usernameError = document.getElementById("usernameError");
        if (username.length < 3) {
            usernameError.textContent = "Username must be at least 3 characters long.";
            return false;
        } else {
            usernameError.textContent = "";
            return true;
        }
    }

    function validateEmail() {
        const email = document.getElementById("email").value;
        const emailError = document.getElementById("emailError");
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            emailError.textContent = "Please enter a valid email address.";
            return false;
        } else {
            emailError.textContent = "";
            return true;
        }
    }

    function validatePassword() {
        const password = document.getElementById("password").value;
        const passwordError = document.getElementById("passwordError");
        const passwordStrength = document.getElementById("passwordStrength");

        let strength = 0;
        if (password.length >= 8) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[a-z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[\W]/.test(password)) strength++;

        const strengthText = ["Weak", "Moderate", "Strong", "Very Strong"][strength - 1] || "Weak";
        passwordStrength.textContent = `Strength: ${strengthText}`;

        if (strength < 3) {
            passwordError.textContent = "Password is too weak.";
            return false;
        } else {
            passwordError.textContent = "";
            return true;
        }
    }

    function validateForm() {
        return validateUsername() && validateEmail() && validatePassword();
    }

    // Load the initial route
    loadContent('home');
});
