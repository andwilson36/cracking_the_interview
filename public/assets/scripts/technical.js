function init() {
    hideModel();
    getAllQuestions()
}

function getAllQuestions() {
    fetch('/api/technical', {
        method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => data)
}

function hideModel() {
    document.querySelector(".qa-settings-modal")
        .style.display = "none"; 
}

function settingsButtonHandler() {
    document.querySelector(".qa-settings-modal")
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
    .querySelector(".cancel-button")
    .addEventListener("click", hideModel);

document
    .querySelector(".submit")
    .addEventListener("click", saveButtonHandler);

init();
