const a = []

async function getAllQuestions() {
    await $.get("/api/behavioral")
        .done((data) => {
            a.push(data);
            ranQuestion();
        })
        .fail(() => {
            alert("error");
            return;
        })
}

(function () {
    getAllQuestions();
})();

function ranQuestion() {
    let randomQuestion = a[0].behavioral.questions[Math.floor(Math.random() * a[0].behavioral.questions.length)];
    checkForRepeat(randomQuestion) ? ranQuestion() : serveQuestion(randomQuestion);
}

function checkForRepeat(question) {
    let prev = localStorage.getItem("prevQ");
    if (prev === question.question) {
        return true;
    } else {
        localStorage.setItem("prevQ", question.question);
        return false;
    }
}

function serveQuestion(question) {
    document
        .querySelector(".content-question")
        .textContent = question.question;
    document
        .querySelector(".answer")
        .textContent = question.answer;
}