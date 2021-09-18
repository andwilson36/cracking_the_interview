
function init() {
	getAllQuestions()
	document.querySelector("#questionForm").addEventListener('submit', newQuestion)
	document.querySelector("#addButton").addEventListener('click', toggleAdd)
}

function toggleAdd() {
	if (document.querySelector("#questionForm").style.display === 'flex') {
		document.querySelector("#questionForm").style.display = 'none'
		document.querySelector("#questionDisplay").style.display = 'flex'
	} else {
		document.querySelector("#questionForm").style.display = 'flex'
		document.querySelector("#questionDisplay").style.display = 'none'
	}
}

async function getAllQuestions() {
	await $.get("/api/technical")
		.done((data) => {
			createTable(data)
		})
		.fail(() => {
			alert("error");
			return;
		})
}

function clearOutTable() {
	let tempEl = document.querySelector("#questionDisplay").firstElementChild.firstElementChild;
	document.querySelector("#questionDisplay").firstElementChild.innerHTML = '';
	document.querySelector("#questionDisplay").firstElementChild.appendChild(tempEl);
}

function createTable(questions) {
	clearOutTable();
	for (const language in questions) {
		for (const difficulty in questions[language]) {
			questions[language][difficulty].forEach(element => {
				let table = document.querySelector("#questionDisplay").firstElementChild
				let tableRow = document.createElement('tr')

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
	toggleAdd()

	if (document.querySelector("#question").value === '' || document.querySelector("#answer").value === '') {
		console.error('cannot have empty fields')
		return
	}

	$.post("/api/technical", {
		body: JSON.stringify({
			category: document.querySelector("#questionType").value,
			language: document.querySelector("#questionLanguage").value,
			difficulty: document.querySelector("#questionDifficulty").value,
			question: document.querySelector("#question").value,
			answer: document.querySelector("#answer").value
		})
	}
	)
		.done((data) => {
			console.log(data)
			createTable(data)
		})
		.fail((err) => {
			alert(err);
		})
}

init()