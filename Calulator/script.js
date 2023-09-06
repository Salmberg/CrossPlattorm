const buttonElements = document.getElementsByClassName('button');
const resultList = document.getElementById('result_list');
const result = document.getElementById('result');
const clearButton = document.getElementById('clearButton')
const resultBlock = document.getElementById('result_block')
let firstInput = true;



for(const buttonElement of buttonElements) {
    buttonElement.addEventListener('click', () => {
        buttonListener(buttonElement);
    })
}

const buttonListener = (button) => {
    if(button.innerText == '=') {
        console.log('Calculate button clicked');
        calculate();
    } else {
        display(button.innerText);
    }
}

const clearButtonListener = () => {
    resultList.innerHTML = ''; // Clear the content of resultList
    clearResult(); // Clear the result display
    firstInput = true; // Reset firstInput to true
    
    // Check if result_list has child elements and toggle the visibility of result_block
    if (resultList.children.length > 0) {
        document.getElementById('result_block').classList.remove('hide');
    } else {
        document.getElementById('result_block').classList.add('hide');
    }
}
clearButton.addEventListener('click', clearButtonListener);


const clearResult = () => {
    result.innerText= '';
}

const display = (value) => {
    if (firstInput) {
        clearResult();
        firstInput = false;
    }
    console.log('Displaying:', value);
    result.innerText += value;
}

const calculate = () => {
    let res = eval(result.innerText); // byt ut!
    display('=' + res);
    firstInput = true;
    displayResult(result.innerText);
   
}

 const displayResult = (value) => {
    const listItem = document.createElement('li');
    listItem.innerText = value;
    resultList.appendChild(listItem)
}