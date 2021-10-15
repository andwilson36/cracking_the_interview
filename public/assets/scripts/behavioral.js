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
    console.log(randomQuestion)
}