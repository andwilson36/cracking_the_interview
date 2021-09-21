//import Questions from "./technical.json"

// console.log(Questions.javascript.basics)

function init() {
    hideModel()
}

function hideModel() {
    document.querySelector(".qa-settings-modal")
        .style.display = "none"; 
}

document
    .querySelector(".settings-btn")
    .addEventListener("click", function(event) {
        document.querySelector(".qa-settings-modal")
            .style.display = "block";
        event.preventDefault();
    });

document
    .querySelector(".cancel-button")
    .addEventListener("click", hideModel);
    
init();
