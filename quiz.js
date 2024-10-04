// Function to submit an answer and navigate to the next question
function submitAnswer(formId, correctAnswer, nextPage) {
    const form = document.getElementById(formId);
    const selectedAnswer = form.querySelector('input[name="' + formId.charAt(0) + '"]:checked');
    console.log(selectedAnswer)
    if (selectedAnswer) {
        // Get score from the query string (or initialize it)
        const urlParams = new URLSearchParams(window.location.search);
        let score = parseInt(urlParams.get('score')) || 0;

        // Check if the selected answer is correct
        if (selectedAnswer.value === correctAnswer) {
            score++;
        }

        // Navigate to the next page and pass the updated score in the query string
        window.location.href = nextPage + '?score=' + score;
    } else {
        alert('Please select an answer before continuing!');
    }
}

// Function to display the result on the result page
function showResult() {
    const urlParams = new URLSearchParams(window.location.search);
    const score = parseInt(urlParams.get('score')) || 0;
    const totalQuestions = 4;

    document.getElementById('result').innerText = `You scored ${score} out of ${totalQuestions}`;
}
