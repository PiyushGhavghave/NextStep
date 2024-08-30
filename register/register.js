document.getElementById('registerForm').onsubmit = function(event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way
    window.location.href = '/assessment/assessment.html';  // Redirect to the result.html page
};