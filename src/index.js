// call the date function
const date = new Date();

// days of the week function
const daysFunction = () => {
	// declare variable
	const day = document.querySelector("[data-testid='currentDayOfTheWeek']");

	const dayOfTheWeek = date.getDay();

	// if statement
	if (dayOfTheWeek === 0) {
		day.textContent = "Sunday";
	} else if (dayOfTheWeek === 1) {
		day.textContent = "Monday";
	} else if (dayOfTheWeek === 2) {
		day.textContent = "Tuesday";
	} else if (dayOfTheWeek === 3) {
		day.textContent = "Wednesday";
	} else if (dayOfTheWeek === 4) {
		day.textContent = "Thursday";
	} else if (dayOfTheWeek === 5) {
		day.textContent = "Friday";
	} else if (dayOfTheWeek === 6) {
		day.textContent = "Saturday";
	} else {
		day.textContent = "Invalid";
	}
};
daysFunction();

const timeFunction = () => {
	const time = document.querySelector("[data-testid='currentUTCTime']")
	let millSec = date.getTime();
	time.textContent = millSec;
};
timeFunction();