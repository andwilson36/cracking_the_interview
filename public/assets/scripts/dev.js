let questions = {}

function init() {
   getAllMissions()
   let table = document.querySelector(".questionDisplay")
}

async function getAllMissions() {
   await fetch("/api/")
      .then(response => {
         return response.json();
      })
      .then(data => questions = data);

   console.log(questions)
}

init()