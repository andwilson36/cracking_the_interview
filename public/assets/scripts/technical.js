const arr = []; 

const js = localStorage.getItem("js");
const b = localStorage.getItem("b");
const i = localStorage.getItem("i");
const a = localStorage.getItem("a");

let jscb = document.querySelector(".js").checked;
let bcb = document.querySelector(".b").checked;
let icb = document.querySelector(".i").checked;
let acb = document.querySelector(".a").checked;

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
    js === 'true' ? jscb = true 
        : jscb = false;

    b === 'true' ? bcb = true 
        : bcb = false;

    i === 'true' ? icb = true 
        : icb = false;

    a === 'true' ? acb = true 
        : acb = false;
}

async function getAllQuestions() {
	await $.get("/api/technical")
		.done((data) => {
            arr.push(data);
            ranQuestion();
		})
		.fail(() => {
			alert("error");
			return;
		})
}

function ranQuestion() {
    const q = arr[0];
    console.log(q)
    js === 'true' ? jscb = true 
        : jscb = false;

    b === 'true' ? bcb = true 
        : bcb = false;

    i === 'true' ? icb = true 
        : icb = false;

    a === 'true' ? acb = true 
        : acb = false;
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
    jscb ? localStorage.setItem("js", true) 
        : localStorage.setItem("js", false);

    bcb ? localStorage.setItem("b", true) 
        : localStorage.setItem("b", false);

    icb ? localStorage.setItem("i", true) 
        : localStorage.setItem("i", false);

    acb ? localStorage.setItem("a", true) 
        : localStorage.setItem("a", false);

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
