let questions = {}

function init() {
   getAllMissions()
   let table = document.querySelector(".questionDisplay")
   document.querySelector("#questionForm").addEventListener('submit', newQuestion)
}

async function getAllMissions() {
   // await fetch("/api/")
   //    .then(response => {
   //       return response.json();
   //    })
   //    .then(data => questions = data);

   // console.log(questions)
}

function newQuestion(e) {
   e.preventDefault()

   var jqxhr = $.post( "/api/technical")
      .done((data) => {
        console.log(data);
      })
      .fail(() => {
        alert( "error" );
      })
}

init()