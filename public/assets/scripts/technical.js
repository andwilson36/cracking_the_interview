const a = []; 

const jscb = document.querySelector(".js");
const bcb = document.querySelector(".b");
const icb = document.querySelector(".i");

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function init() {
    hideModel();
    hideAnswer();
    getFilters();
    getAllQuestions();
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

function getFilters() {
    const js = localStorage.getItem("js");
    const b = localStorage.getItem("b");
    const i = localStorage.getItem("i");

    js === 'true' ? jscb.checked = true 
        : jscb.checked = false;

    b === 'true' ? bcb.checked = true 
        : bcb.checked = false;

    i === 'true' ? icb.checked = true 
        : icb.checked = false;
}

async function getAllQuestions() {
	await $.get("/api/technical")
		.done((data) => {
            a.push(data);
            ranQuestion();
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
    icb.checked && bcb.checked ? num === 1 ? ran = q.javascript.basic[Math.floor(Math.random() * q.javascript.basic.length)] 
                                    : ran = q.javascript.intermediate[Math.floor(Math.random() * q.javascript.intermediate.length)]
        : icb.checked ? ran = q.javascript.intermediate[Math.floor(Math.random() * q.javascript.intermediate.length)]
        : ran = q.javascript.basic[Math.floor(Math.random() * q.javascript.basic.length)];
    
    serveQuestion(ran);
}

function serveQuestion(question) {
    document
        .querySelector(".content-question")
        .textContent = question.question;
    document
        .querySelector(".answer")
        .textContent = question.answer;
}

function settingsButtonHandler() {
    getFilters();

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
    jscb.checked ? localStorage.setItem("js", true) 
        : localStorage.setItem("js", false);

    bcb.checked ? localStorage.setItem("b", true) 
        : localStorage.setItem("b", false);

    icb.checked ? localStorage.setItem("i", true) 
        : localStorage.setItem("i", false);

    document.querySelector(".qa-settings-modal")
        .style.display = "none"; 
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
