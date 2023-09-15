const categoryItems = document.querySelectorAll('.category-item');
const difficultyItems = document.querySelectorAll('.difficulty-item');
const startButton = document.getElementById('startButton');
const questionsContainer = document.querySelector('.questions-container');

let questionsData = [];
let currentQuestionIndex = 0;

// Function to handle item click (category or difficulty)
function handleItemClick(event) {
    const item = event.target;

    // Determine whether it's a category or difficulty item
    if (item.classList.contains('category-item')) {
        categoryItems.forEach(item => {
            item.style.color = 'white';
        });
        item.style.color = 'green';
    } else if (item.classList.contains('difficulty-item')) {
        difficultyItems.forEach(item => {
            item.style.color = 'white';
        });
        item.style.color = 'green';
    }
}

// Add click event listeners to all category and difficulty items
categoryItems.forEach(item => {
    item.addEventListener('click', handleItemClick);
});

difficultyItems.forEach(item => {
    item.addEventListener('click', handleItemClick);
});

// Function to fetch questions from the API
async function fetchQuestions() {
    const apiUrl = 'https://opentdb.com/api.php?amount=10'; // Adjust the URL and parameters as needed

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching questions:', error);
        return [];
    }
}

// Function to start quiz with selected category and difficulty
startButton.addEventListener('click', async () => {
    const selectedCategory = document.querySelector('.category-item[style="color: green;"]');
    const selectedDifficulty = document.querySelector('.difficulty-item[style="color: green;"]');

    if (selectedCategory && selectedDifficulty) {

        const quizContainer = document.querySelector('.quiz-container');
        quizContainer.classList.add('hide');
        questionsContainer.classList.remove('hide');

        // Fetch questions from the API
        questionsData = await fetchQuestions();
        currentQuestionIndex = 0;

        // Display the first question
        displayCurrentQuestion();
    } else {
        alert('Please select a Category and Difficulty before starting the quiz.');
    }
});


// Function to display the current question within the questions container
function displayCurrentQuestion() {
    const questionData = questionsData[currentQuestionIndex];
    const question = questionData.question;
    const options = [...questionData.incorrect_answers, questionData.correct_answer].sort(() => Math.random() - 0.5);

    const questionElement = createQuestion(question, options);

    // Clear the questions container and append the new question
    questionsContainer.innerHTML = '';
    questionsContainer.appendChild(questionElement);

    console.log(currentQuestionIndex);
    console.log(questionData);

}


// Function to generate a question element with options
function createQuestion(questionText, options) {
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');

    const questionTextElement = document.createElement('p');
    questionTextElement.textContent = questionText;
    questionElement.appendChild(questionTextElement);

    options.forEach((optionText, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');

        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.name = 'question' + index; // Give each question a unique name
        radioInput.value = optionText;

        const optionLabel = document.createElement('label');
        optionLabel.textContent = optionText;

        optionElement.appendChild(radioInput);
        optionElement.appendChild(optionLabel);

        questionElement.appendChild(optionElement);
    });

    const nextButton = document.createElement('button');
nextButton.textContent = 'Next';
nextButton.classList.add('next-button');
nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questionsData.length - 1) {
        currentQuestionIndex++; // Increment the index
        displayCurrentQuestion(); // Display the next question
    } else {
        // This is the last question, you can add your logic here
        alert('You have completed the quiz!');
    }
});
questionElement.appendChild(nextButton);

    
    return questionElement;
}


