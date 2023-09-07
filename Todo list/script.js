const addTodoButton = document.getElementById("addTodoButton");
const addBlock = document.getElementById("add_block");
const addButton = document.getElementById("addButton");
const todoList = document.getElementById("todo_list");

addTodoButton.addEventListener("click", () => {
    // Show the add_block
    addBlock.classList.remove("hide");
});

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
