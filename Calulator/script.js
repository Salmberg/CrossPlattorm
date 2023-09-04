const numberElements = document.getElementsByClassName('calc_number');
const resultList = document.getElementById('result_list')

// for(let i=0; i< numberElements.length; i++) {
//  numberElements[i].addEventlistener ...
// }

// Array.from(numberElements).forEach(element => {
//     element.addEventListener 
// })

for(const numberElement of numberElements) {
    numberElement.addEventListener('click', () => {
        console.log('clicked' + numberElement.innerText);
    })
}





//Ska köras i calculate funktionen 
// i denna --> displayResult(result.innerText);

const displayResult = (value) => {
    const listItem = document.createElement('li');
    listItem.innerText = value;
    resultList.appendChild(listItem)
}

