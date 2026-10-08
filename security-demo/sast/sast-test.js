// SECURITY DEMO ONLY
// Intentionally vulnerable code for SAST testing.

function executeUserInput(userInput) {
    return eval(userInput);
}

const userInput = "2 + 2";

console.log(executeUserInput(userInput));