// Write your code here!
// Remove the existing <main> element with id "main"
document.querySelector("main#main").remove();

// Create a new <h1> element
const newHeader = document.createElement("h1");

// Set its id to "victory"
newHeader.id = "victory";

// Set its text content
newHeader.innerHTML = "James is the champion"; 