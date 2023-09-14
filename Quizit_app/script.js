const categoryItems = document.querySelectorAll('.category-item');
const difficultyItems = document.querySelectorAll('.difficulty-item');

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
document.getElementById('startButton').addEventListener('click', async () => {
    const selectedCategory = document.querySelector('.category-item[style="color: green;"]');
    const selectedDifficulty = document.querySelector('.difficulty-item[style="color: green;"]');
    
    if (selectedCategory && selectedDifficulty) {
       // Hide the quiz-container
       const quizContainer = document.querySelector('.quiz-container');
       quizContainer.classList.add('hide');

       // Show the questions-container
       const questionsContainer = document.querySelector('.questions-container');
       questionsContainer.classList.remove('hide');

       // Fetch questions from the API
       const questions = await fetchQuestions();

       // Create and append question elements with options
       questions.forEach((questionData, index) => {
           const question = questionData.question;
           const options = [...questionData.incorrect_answers, questionData.correct_answer].sort(() => Math.random() - 0.5);

           const questionElement = createQuestion(question, options);

           // Append questions to the questions container
           questionsContainer.appendChild(questionElement);
       });
    } else {
        alert('Please select a Category and Difficulty before starting the quiz.');
    }
});


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

    return questionElement;
}