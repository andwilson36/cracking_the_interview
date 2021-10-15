const a = []

async function getAllQuestions() {
    await $.get("/api/behavioral")
        .done((data) => {
            a.push(data);
            //ranQuestion();
        })
        .fail(() => {
            alert("error");
            return;
        })
}

getAllQuestions()

console.log(a)