const a = []; 

function init() {
    hideModel();
    hideAnswer();
    getAllQuestions()
}

function hideModel() {
    document.querySelector(".qa-settings-modal")
        .style.display = "none"; 
}

function hideAnswer() {
    document.querySelector(".answer")
        .style.display = "none";
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
// [Math.floor(Math.random() * a.javascript.basic.length)]
function ranQuestion() {
    const q = a[0];
    let ran = q.javascript.basic[Math.floor(Math.random() * q.javascript.basic.length)]
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
