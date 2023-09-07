// call the date function
const date = new Date();

// days of the week function
const daysFunction = () => {
	// declare variables
	const day = document.querySelector(".day");

	const dayOfTheWeek = date.getDay();

	// if statement
	if (dayOfTheWeek === 0) {
		day.textContent = "Sunday";
	} else if (dayOfTheWeek === 1) {
		day.textContent = "Monday";
	} else if (dayOfTheWeek === 2) {
		date.textContent = "Tuesday";
	} else if (dayOfTheWeek === 3) {
		date.textContent = "Wednesday";
	} else if (dayOfTheWeek === 4) {
		day.textContent = "Thursday";
	} else if (dayOfTheWeek === 5) {
		date.textContent = "Friday";
	} else if (dayOfTheWeek === 6) {
		date.textContent = "Saturday";
	} else {
		date.textContent = "Not Found";
	}
};
daysFunction();

const timeFunction = () => {
	const time = document.querySelector(".time_utc");
	let millSec = date.getMilliseconds();
	time.textContent = millSec;

	/* Not hours, min and sec
	let getHour = date.getHours();
	let getMin = date.getMinutes();
	let getSec = date.getSeconds();

	// if statement
	if (getMin > 0 && getMin <= 9) {
		getMin = `0${getMin}`;
	}
	if (getSec > 0 && getSec <= 9) {
		getSec = `0${getSec}`;
	}

	// join hour, minute, and second
	const currentTime = `${getHour}:${getMin}:${getSec}`;
	*/

};
timeFunction();