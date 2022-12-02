const weight = document.querySelector('.kgs')
const height = document.querySelector('.cms')
const button = document.querySelector('button')
const result = document.querySelector('.result')
const resultTwo = document.querySelector('.resulttwo')
const bmiCalculator = () => {
	const weightValue = weight.value
	const heightValue = height.value
	const gowno = Math.pow(heightValue, 2)
	const templateBmi = parseFloat((weightValue / gowno) * 10000)
	result.textContent = `Twoje bmi: ${templateBmi.toFixed(2)}`
	if (templateBmi < 16) {
		resultTwo.textContent = `wygłodzenie`
		resultTwo.style.color = 'red'
	} else if (templateBmi > 16 && templateBmi < 17) {
		resultTwo.textContent = `wychudzenie`
		resultTwo.style.color = 'red'
	} else if (templateBmi > 17 && templateBmi < 18.5) {
		resultTwo.textContent = `niedowaga`
		resultTwo.style.color = 'violet'
	} else if (templateBmi > 18.5 && templateBmi < 25) {
		resultTwo.textContent = `wartość prawidłowa`
		resultTwo.style.color = 'green'
	} else if (templateBmi > 25 && templateBmi < 30) {
		resultTwo.textContent = `nadwaga`
		resultTwo.style.color = 'violet'
	} else if (templateBmi > 30 && templateBmi < 35) {
		resultTwo.textContent = `I stopień otyłości`
		resultTwo.style.color = 'red'
	} else if (templateBmi > 35 && templateBmi < 40) {
		resultTwo.textContent = `II stopień otyłości`
		resultTwo.style.color = 'red'
	} else if (templateBmi > 40) {
		resultTwo.textContent = `III stopień otyłości, otyłość skrajna`
		resultTwo.style.color = 'red'
	}
}

button.addEventListener('click', bmiCalculator)
