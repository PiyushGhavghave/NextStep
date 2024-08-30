function nextQuestion(questionNumber) {
    const currentQuestion = document.querySelector('.question:not([style*="display: none"])');
    const nextQuestion = document.getElementById('question' + questionNumber);
    
    currentQuestion.style.display = 'none';
    nextQuestion.style.display = 'block';
}

function prevQuestion(questionNumber) {
    const currentQuestion = document.querySelector('.question:not([style*="display: none"])');
    const prevQuestion = document.getElementById('question' + questionNumber);
    
    currentQuestion.style.display = 'none';
    prevQuestion.style.display = 'block';
}

document.getElementById('assessmentForm').onsubmit = function(event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way
    window.location.href = 'result.html';  // Redirect to the result.html page
};



