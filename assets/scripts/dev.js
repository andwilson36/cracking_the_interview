function init() {
    getAllMissions()
    let table = document.querySelector(".questionDisplay")
}

async function getAllMissions() {
    await fetch("../assets/scripts/technical.json")
    .then(response => {
       return response.json();
    })
    .then(data => console.log(data));

    await fetch("../assets/scripts/behavioral.json")
    .then(response => {
       return response.json();
    })
    .then(data => console.log(data));

    await fetch("../assets/scripts/algorithm.json")
    .then(response => {
       return response.json();
    })
    .then(data => console.log(data));
}

init()