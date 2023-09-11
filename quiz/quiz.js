const apiUrl = "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy";

const button = document.querySelector('#fetch');


button.addEventListener('click', async e => {
    console.log('1. Click');

    const response = await fetch(apiUrl);
    console.log('2. got response:', response)

    const quisData = await response.json();
    console.log('3. got data: ', quisData);

    const questions = quisData.results;
    createQuestions(questions);


})

const createQuestions = (questions) => {
    const questionContainer = document.querySelector('#questions');

    questions.forEach(question => {
        const questionElement = createQuestonElement(question);
        questionContainer.appendChild(questionElement);

    });

}

const createQuestonElement = (question) => {
    const questionElement = document.createElement('div');
    questionElement.className = 'question';

    const questionHeading = document.createElement('h2');
    questionHeading.innerHTML = question.question;
    questionElement.appendChild(questionHeading);

  //  let options = [ ...question.incorrect_answers, question.correct_answer];
    let options = question.incorrect_answers;
    const randomIndex = Math.floor(Math.random() * options.length + 1);
    options.splice(randomIndex, 0, question.correct_answer);



    options.forEach( option => {
        const optionElement = createOptionElement(option, question.correct_answer);
        questionElement.appendChild(optionElement);
    })
    return questionElement;

}

const createOptionElement = (option, correct_answer) => {
    const optionElement = document.createElement('div');
    optionElement.className = 'option';
    optionElement.innerHTML = option;

    optionElement.addEventListener('click', e => {
        if ( option == correct_answer) {
            optionElement.classList.add('correct_answer');
            console.log('Rätt!');
        } else {
            optionElement.classList.add('incorrect_answer');
            console.log('Fel!');
        }
    })

    return optionElement;
}