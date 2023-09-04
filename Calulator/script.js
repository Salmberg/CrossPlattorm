const buttonElements = document.getElementsByClassName('button');
const resultList = document.getElementById('result_list')
const result = document.getElementById('result')
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
}


//Ska köras i calculate funktionen 
// i denna --> displayResult(result.innerText);

// const displayResult = (value) => {
//     const listItem = document.createElement('li');
//     listItem.innerText = value;
//     resultList.appendChild(listItem)
// }



