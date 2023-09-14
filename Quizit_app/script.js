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

// Function to start quiz with selected category and difficulty
document.getElementById('startButton').addEventListener('click', () => {
    const selectedCategory = document.querySelector('.category-item[style="color: green;"]');
    const selectedDifficulty = document.querySelector('.difficulty-item[style="color: green;"]');
    
    if (selectedCategory && selectedDifficulty) {

       // Hide the quiz-container
       const quizContainer = document.querySelector('.quiz-container');
       quizContainer.classList.add('hide');
       console.log('hide the first container')

       // Show the questions-container
       const questionsContainer = document.querySelector('.questions-container');
       questionsContainer.classList.remove('hide');

       // alert(`Starting quiz with Category: ${selectedCategory.textContent} and Difficulty: ${selectedDifficulty.textContent}`);
    } else {
        alert('Please select a Category and Difficulty before starting the quiz.');
    }
});
