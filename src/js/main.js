// const allTeam = document.querySelector('.team__box')
// const allPlayers = document.querySelectorAll('.team__box-player')
// const pitch = document.querySelector('.pitch')
// const allPitchFields = document.querySelectorAll('.pitch__field')
// const pitchFieldAttack = document.querySelector('.pitch__field-atack')
// const allDragableFields = document.querySelectorAll('.draggable-field')

// allPlayers.forEach(player => {
// 	player.addEventListener('dragstart', () => {
// 		player.classList.add('is-dragged')
// 	})

// 	player.addEventListener('dragend', () => {
// 		player.classList.remove('is-dragged')
// 	})
// })

// allDragableFields.forEach(field => {
// 	field.addEventListener('dragover', e => {
// 		e.preventDefault()
// 		const isDragged = document.querySelector('.is-dragged')
// 		field.appendChild(isDragged)
// 		console.log(field)
// 	})
// })

const teamBox = document.querySelector('.team__box')
const allDragableFields = document.querySelectorAll('.draggable-field')
const allPlayers = document.querySelectorAll('.team__box-player')
const allDragablePitchFields = document.querySelectorAll('.draggable-pitch-field')
const dragablePitchField = document.querySelector('.draggable-pitch-field')

console.log(teamBox)

allPlayers.forEach(player => {
	player.addEventListener('dragstart', () => {
		player.classList.add('is-dragged')
	})

	player.addEventListener('dragend', () => {
		player.classList.remove('is-dragged')
	})
})

allDragablePitchFields.forEach(field => {
	field.addEventListener('dragover', e => {
		e.preventDefault()
		if (field.childElementCount < 1) {
			const isDragged = document.querySelector('.is-dragged')
			field.appendChild(isDragged)
		}
	})
})

teamBox.addEventListener('dragover', e => {
	e.preventDefault()
	const test = document.querySelector('.is-dragged')
	teamBox.appendChild(test)
})

// dragablePitchField.addEventListener('dragover', e => {
// 	e.preventDefault()
// 	if (dragablePitchField.childElementCount < 1) {
// 		const isDragged = document.querySelector('.is-dragged')
// 		dragablePitchField.appendChild(isDragged)
// 	}
// })

// dragablePitchField.addEventListener('dragover', e => {
// 	console.log('test')
// 	e.preventDefault()
// 	const isDragged = document.querySelector('.is-dragged')
// 	dragablePitchField.appendChild(isDragged)
// 	console.log(isDragged)
// })

// const test = () => {
// 	console.log('coś tam')
// }

// button.addEventListener('mouseover', test)
