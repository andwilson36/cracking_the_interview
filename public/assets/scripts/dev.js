
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
				console.log(element)
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

	$.post("/api/technical")
		.done((data) => {
			console.log(data);
		})
		.fail(() => {
			alert("error");
		})
}

init()