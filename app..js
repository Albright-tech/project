// Get references to HTML elements
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a new task
function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!"); // Show an alert if the input is empty
    } else {
        // Create a new list item
        let li = document.createElement("li");
        li.innerHTML = inputBox.value; // Set the text of the list item to the input value
        listContainer.appendChild(li); // Add the list item to the container
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Create a close (remove) button
        li.appendChild(span); // Add the close button to the list item
        inputBox.value = ""; // Clear the input field
        saveData(); // Save the updated task list to local storage
    }
}

// Event listener for clicking on list items and close buttons
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // Toggle the "checked" class for list items
        saveData(); // Save the updated task list to local storage
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // Remove the list item when the close button is clicked
        saveData(); // Save the updated task list to local storage
    }
}, false);

// Function to save the task list to local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function to load and display tasks from local storage
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

