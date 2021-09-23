const a = []; 

function init() {
    hideModel();
    hideAnswer();
    getAllQuestions()
}

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function hideModel() {
    document.querySelector(".qa-settings-modal")
        .style.display = "none"; 
}

function hideAnswer() {
    document.querySelector(".answer")
        .style.display = "none";
    document.querySelector(".click-message")
        .style.display = "block";
}

async function getAllQuestions() {
	await $.get("/api/technical")
		.done((data) => {
            a.push(data)
            console.log(a)
            ranQuestion()
		})
		.fail(() => {
			alert("error");
			return;
		})
}

function ranQuestion() {
    const q = a[0];
    let num = randomNum(1,2);
    let ran;
    num === 1 ? ran = q.javascript.basic[Math.floor(Math.random() * q.javascript.basic.length)] 
        : ran = q.javascript.intermediate[Math.floor(Math.random() * q.javascript.intermediate.length)]
    serveQuestion(ran)
}

function serveQuestion(question) {
    document
        .querySelector(".content-question")
        .textContent = question.question;
    document.querySelector(".answer")
        .textContent = question.answer;
}

function settingsButtonHandler() {
    document.querySelector(".qa-settings-modal")
        .style.display = "block";
}

function answerButtonHandler() {
    document.querySelector(".click-message")
        .style.display = "none";
    document.querySelector(".answer")
        .style.display = "block";
}

function saveButtonHandler() {
    console.log("send info to filter");
    hideModel();
}

document
    .addEventListener("keydown", init);

document
    .querySelector(".settings-btn")
    .addEventListener("click", settingsButtonHandler);

document
    .querySelector(".content-answer")
    .addEventListener("click", answerButtonHandler);

document
    .querySelector(".cancel-button")
    .addEventListener("click", hideModel);

document
    .querySelector(".submit")
    .addEventListener("click", saveButtonHandler);

init();
