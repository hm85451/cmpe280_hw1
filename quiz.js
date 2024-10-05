// Function to submit an answer and navigate to the next question
function startQuiz(event, nextPage) {
    event.preventDefault();
    localStorage.clear();
    window.location.href = nextPage

}

// Function to submit an answer and navigate to the next question
function submitAnswer(count, event, nextPage) {
    event.preventDefault();
        checkAnswer(count)


    window.location.href = nextPage
}

function checkAnswer(count) {
    question = answerSheet[count-1]

    const form = document.getElementById(question["type"]+"Form");
    let isCorrect = true;

    if (question["count"] === 1){
        selectedAnswer = form.querySelector('input[name="answer"]:checked');
        if (selectedAnswer.value !== question.answer)
            isCorrect = false;
    }   
    else{
        for (let i = 1; i<=question["count"]; i++){
            selectedAnswer = form.querySelector('input[name="answer' + i +  '"]:checked');
            if (selectedAnswer.value !== question['answer'][i-1])
                isCorrect = false;
        }
    }

    console.log(isCorrect)
    count = localStorage.getItem(question["type"]+'Count') || 0;
    count = parseInt(count, 10);
    localStorage.setItem(question["type"]+'Count', count+1);

    if (isCorrect){
        score = localStorage.getItem(question["type"]+'Score') || 0;
        score = parseInt(score, 10);
        localStorage.setItem(question["type"]+'Score', score+1);
    }
    else{
        score = localStorage.getItem(question["type"]+'Score') || 0;
        score = parseInt(score, 10);
        localStorage.setItem(question["type"]+'Score', score);
    }
}

// Function to display the result on the result page
function showResult() {

    const mathTotal = parseInt(localStorage.getItem('mathCount'), 10);
    const mathCorrect = parseInt(localStorage.getItem('mathScore', 10));
    const mathScore = Math.round(mathCorrect/mathTotal*100);

    document.getElementById('math-total').innerText = `Number of Questions Answered: ${mathTotal}`;
    document.getElementById('math-correct').innerText = `Number of  Correct Answers: ${mathCorrect}`;
    document.getElementById('math-score').innerText = `Score: ${mathScore}`;

    const englishTotal = parseInt(localStorage.getItem('englishCount'), 10);
    const englishCorrect = parseInt(localStorage.getItem('englishScore', 10));
    const englishScore = Math.round(englishCorrect/englishTotal*100);

    document.getElementById('english-total').innerText = `Number of Questions Answered: ${englishTotal}`;
    document.getElementById('english-correct').innerText = `Number of  Correct Answers: ${englishCorrect}`;
    document.getElementById('english-score').innerText = `Score: ${englishScore}`;

    const audioTotal = parseInt(localStorage.getItem('audioCount'), 10);
    const audioCorrect = parseInt(localStorage.getItem('audioScore', 10));
    const audioScore = Math.round(audioCorrect/audioTotal*100);

    document.getElementById('audio-total').innerText = `Number of Questions Answered: ${audioTotal}`;
    document.getElementById('audio-correct').innerText = `Number of  Correct Answers: ${audioCorrect}`;
    document.getElementById('audio-score').innerText = `Score: ${audioScore}`;
}


const answerSheet = [
    {
        "type": "math",
        "count": 1,
        "answer": "y=mx+b",
    },

    {
        "type": "math",
        "count": 1,
        "answer": "cosine-thoerem",
    },


    {
        "type": "english",
        "count": 2,
        "answer": ["option1", "google"],
    },

    {
        "type": "audio",
        "count": 1,
        "answer": "nasa",
    },

]