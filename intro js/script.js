const button = document.getElementById('calculateButton');
const backButton = document.getElementById('backButton');
const sumField = document.getElementById('sum');
const nrOfPeopleField = document.getElementById('numberOfPeople');
const tipField = document.getElementById('tip');


function calculateTip(sum, tip) {
    const calculatedTip = parseInt(sum) * parseInt(tip) / 100;
    return calculatedTip;
}


function divideTotal(total, numberOfPeople) {
return total / parseInt( numberOfPeople);

}

function displayDividedSum(sum){
    const element = document.getElementById('peopleSum');
    element.innerHTML = sum + ' kr';

    const inputForm = document.getElementById('inputForm');
    inputForm.classList.toggle('hide');

    document.getElementById('showSum').classList.toggle('hide')

}

button.addEventListener('click', function() {
    const sum = +sumField.value; // Convert to a number using the + operator
    const numberOfPeople = +nrOfPeopleField.value; // Convert to a number using the + operator
    const tip = tipField.value;

    const calculatedTip = calculateTip(sum, tip);
    const total = sum + calculatedTip;

    const peopleSum = divideTotal(total, numberOfPeople);

    displayDividedSum(peopleSum);
})

backButton.addEventListener('click', function() {

    const inputForm = document.getElementById('inputForm');
    inputForm.classList.remove('hide'); 

    const showSum = document.getElementById('showSum');
    showSum.classList.add('hide'); 

    sumField.value = '';
    nrOfPeopleField.value = '';
    tipField.value = '';
   
})