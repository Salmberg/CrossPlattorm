const buttonElements = document.getElementsByClassName('button');
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

// Define a function to perform the calculation.
const calculate = () => {
    // Evaluate the expression in the result display and store the result in 'res'.
    let res = eval(result.innerText); // Note: Using 'eval' can be a security risk.
    
    // Display the result with '=' sign.
    display('=' + res);
    
    // Reset the firstInput flag to true.
    firstInput = true;

    // Add the result to the result list.
    displayResult(result.innerText);
}

// Define a function to display the result in the result list.
const displayResult = (value) => {
    const listItem = document.createElement('li');
    listItem.innerText = value;
    resultList.appendChild(listItem);
}