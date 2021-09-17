
function init() {
	getAllMissions()
	document.querySelector("#questionForm").addEventListener('submit', newQuestion)
}

async function getAllMissions() {
	let questions = {}

	await $.get("/api/technical")
		.done((data) => {
			questions = data
			console.log(data);
		})
		.fail(() => {
			alert("error");
		})

	for (const language in questions) {
		for (const difficulty in questions[language]) {
			questions[language][difficulty].forEach(element => {
				let table = document.querySelector("#questionDisplay").firstElementChild
				let tableRow = document.createElement('tr')
				let tableData = document.createElement('td')

				tableRow.innerHTML =
					`
					<td>${'technical'}</td>
					<td>${language}</td>
					<td>${difficulty}</td>
					<td>${element.question}</td>
					<td>${element.answer}</td>
					`

				table.appendChild(tableRow)
			});
		}
	}
}

function newQuestion(e) {
	e.preventDefault()

	$.post("/api/technical", {
		body: JSON.stringify({
			category: document.querySelector("#questionType").value,
			language: document.querySelector("#questionLanguage").value,
			difficulty: document.querySelector("#questionDifficulty").value,
			question: document.querySelector("#question").value,
			answer: document.querySelector("#questionType").value
		})
	}
	)
		.done((data) => {
			console.log(data);
		})
		.fail(() => {
			alert("error");
		})
}

init()