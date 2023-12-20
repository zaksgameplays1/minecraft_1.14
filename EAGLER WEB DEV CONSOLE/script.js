const consoleModal = document.getElementById("consoleModal");
        const consoleDiv = document.getElementById("console");
        const input = document.getElementById("input");
        const usernameInput = document.getElementById("username");
        const passwordInput = document.getElementById("password");
        const loginButton = document.getElementById("login-button");
        const commandList = document.getElementById("command-list");

        // Define correctUsername and correctPassword for authentication
        const correctUsername = "your_username";
        const correctPassword = "your_password";

        // Define available commands and their descriptions
        const availableCommands = {
            "help": "Display a list of available commands.",
            "clear": "Clear the console screen.",
            "run": "Run your client in the game.",
        };

        // Function to display the list of available commands and command history
        function displayAvailableCommands() {
            writeToConsole("Available Commands:");
            for (const command in availableCommands) {
                const description = availableCommands[command];
                writeToConsole(`- ${command}: ${description}`);
            }

            // Display the command history
            const commandHistoryItems = Array.from(commandList.getElementsByTagName("li"));
            if (commandHistoryItems.length > 0) {
                writeToConsole("Command History:");
                commandHistoryItems.forEach(item => {
                    writeToConsole(`- ${item.textContent}`);
                });
            }
        }

        // Function to display a message in the console
        function writeToConsole(message) {
            consoleDiv.innerHTML += message + "<br>";
            consoleDiv.scrollTop = consoleDiv.scrollHeight;
        }

        // Function to handle user input
        function handleInput() {
            const command = input.value.trim();
            input.value = "";

            if (command === "help") {
                displayAvailableCommands();
            } else if (command === "clear") {
                consoleDiv.innerHTML = "";
            } else {
                // Add the typed command to the command history
                const commandItem = document.createElement("li");
                commandItem.textContent = command;
                commandList.appendChild(commandItem);

                // Limit the number of command history items (adjust as needed)
                if (commandList.children.length > 10) {
                    commandList.removeChild(commandList.children[0]);
                }

                writeToConsole(`EAGLER:\\> ${command}`);
            }
        }

        // Handle Enter key press in the input field
        input.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                handleInput();
            }
        });

        loginButton.addEventListener("click", function() {
            const enteredUsername = usernameInput.value.trim();
            const enteredPassword = passwordInput.value.trim();

            if (enteredUsername !== "" && enteredPassword !== "") {
                // Authentication successful with any username and password
                alert("Login successful!");
                // You can add further actions or redirection here
            } else {
                // Authentication failed
                alert("Login failed. Please enter valid credentials.");
            }
        });

        writeToConsole("(c) Eagler Devs. All rights reserved.");
        writeToConsole("EAGLER WEB DEV CONSOLE  [Version 0.0.1-alpha]");
        writeToConsole("EAGLER:\\> Welcome to the EAGLER WEB DEV CONSOLE ");
        writeToConsole("EAGLER:\\> Type 'help' for a list of commands.");
