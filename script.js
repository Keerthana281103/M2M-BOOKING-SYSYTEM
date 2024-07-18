
        // Function to validate form input
        function validateForm() {
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

            if (name === "" || email === "") {
                alert("Name and Email must be filled out");
                return false;
            }
            if (!email.match(emailPattern)) {
                alert("Invalid email address");
                return false;
            }
            alert("Form submitted successfully");
            return true;
        }

        // Function to handle login
        function login() {
            const username = prompt("Enter Username:");
            const password = prompt("Enter Password:");

            if (username === "admin" && password === "admin123") {
                alert("Login successful");
            } else {
                alert("Invalid credentials");
            }
        }

        // Function to handle sign-up
        function signUp() {
            const username = prompt("Choose a Username:");
            const password = prompt("Choose a Password:");

            if (username && password) {
                alert("Sign-up successful");
            } else {
                alert("Sign-up failed. Please provide valid credentials.");
            }
        }
  