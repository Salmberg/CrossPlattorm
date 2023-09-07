const buttonElements = document.getElementsByClassName('button');
const cButton = document.getElementById("cButton");
const resultList = document.getElementById('result_list');
const result = document.getElementById('result');
const clearButton = document.getElementById('clearButton')
const resultBlock = document.getElementById('result_block')
let firstInput = true;


// Loop through each button element and add a click event listener.
for (const buttonElement of buttonElements) {
    buttonElement.addEventListener('click', () => {
        // Call the buttonListener function when a button is clicked.
        buttonListener(buttonElement);
    });
}

// Define a function to handle button click events.
const buttonListener = (button) => {
    if (button.innerText == '=') {
        // If the clicked button has '=' text, perform the calculation.
        console.log('Calculate button clicked');
        calculate();
    } else {
        // Otherwise, display the button's text as input.
        display(button.innerText);
    }
}

// Define a function to handle the 'Clear' button click event.
const clearButtonListener = () => {
    // Clear the content of the result list.
    resultList.innerHTML = '';
    
    // Clear the result display.
    clearResult();
    
    // Reset the firstInput flag to true.
    firstInput = true;

    // Check if the result_list has child elements and toggle the visibility of result_block accordingly.
    if (resultList.children.length > 0) {
        resultBlock.classList.remove('hide');
    } else {
        resultBlock.classList.add('hide');
    }
}
// Add a click event listener to the 'Clear' button.
clearButton.addEventListener('click', clearButtonListener);


// Define a function to clear the calculator's result.
function clearCalculator() {
    // Set the result display to 0 or any initial value you prefer.
    document.getElementById("result").textContent = "0";
    console.log('C button clicked')
    firstInput = true;
}
// Attach an event listener to the clear button to call the clearCalculator function when clicked.
cButton.addEventListener("click", clearCalculator);

// Define a function to clear the result display.
const clearResult = () => {
    result.innerText = '';
}

// Define a function to display input values.
const display = (value) => {
    if (firstInput) {
        // If it's the first input, clear the result display.
        clearResult();
        firstInput = false;
    }
    console.log('Displaying:', value);
    result.innerText += value;
}

const calculate = () => {
    try {
        // Get the expression from the result display.
        const expression = result.innerText;

        // Create a new Function to evaluate the expression.
        const calculateFunction = new Function('return ' + expression);

        // Evaluate the expression and get the result.
        const res = calculateFunction();

        // Display the result with '=' sign.
        display('=' + res);

        // Reset the firstInput flag to true.
        firstInput = true;

        // Add the result to the result list.
        displayResult(result.innerText);
    } catch (error) {
        // Handle any errors that occur during evaluation.
        console.error('Error:', error);
        // You can display an error message or take appropriate action here.
    }
}


// Define a function to display the result in the result list.
const displayResult = (value) => {
    const listItem = document.createElement('li');
    listItem.innerText = value;
    resultList.appendChild(listItem);
}

 // Add the result to the result list.
 //displayResult(result.innerText);
