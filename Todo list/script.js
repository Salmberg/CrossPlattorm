const addTodoButton = document.getElementById("addTodoButton");
const addBlock = document.getElementById("add_block");
const addButton = document.getElementById("addButton");
const closeButton = document.getElementById("closeButton");
const clearListButton = document.getElementById("clearListButton");
const todoList = document.getElementById("todo_list");

addTodoButton.addEventListener("click", () => {
    // Show the add_block
    addBlock.classList.remove("hide");
});

closeButton.addEventListener('click', () => {
    addBlock.classList.add("hide");
})

clearListButton.addEventListener('click', () => {
    todoList.innerHTML = '';
})

addButton.addEventListener("click", () => {
    // Get the input value
    const input = addBlock.querySelector("input[type='text']").value;

    if (input.trim() !== "") {
        // Create a new list item
        const listItem = document.createElement("li");
        listItem.textContent = input;

        // Append the list item to the todo_list
        todoList.appendChild(listItem);

        // Clear the input field
        addBlock.querySelector("input[type='text']").value = "";

        // Hide the add_block
        addBlock.classList.add("hide");
    }
});


todoList.addEventListener("click", (event) => {
    // Check if a list item was clicked
    if (event.target.tagName === "LI") {
        // Toggle the "checked" class to mark/unmark the item
        event.target.classList.toggle("checked");
    }
});

// Function to add a new todo item
function addTodoItem(text) {
    // Create a new list item
    const listItem = document.createElement("li");
    listItem.textContent = text;

    // Append the list item to the todo_list
    todoList.appendChild(listItem);
}


