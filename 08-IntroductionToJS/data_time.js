let current_time = new Date();
let date_and_time = document.getElementById("date-and-time");
date_and_time.innerHTML = `getDate():\t${current_time.getDate()};<br>`;
date_and_time.append(`getTime():\t${current_time.getTime()};`);
date_and_time.append(`getDay():\t${(new Date(2025, 03 - 1, 16)).toLocaleString("default", { weekday: "long" })};`);

function tick_timer()
{
	let current_time = new Date();
	if (document.getElementById("show-date").checked)
	{
		let yyyy = current_time.getFullYear();
		let MM = checkNumber(current_time.getMonth() + 1);
		let dd = checkNumber(current_time.getDate());
		let date_string = `${yyyy}.${MM}.${dd}`;
		document.getElementById("date").innerHTML = date_string;
	}
	else
	{
		document.getElementById("date").innerHTML = "";
	}

	document.getElementById("weekday").innerHTML =
		document.getElementById("show-weekday").checked ? current_time.toLocaleString("default", { weekday: "long" }) : "";

	let hh = checkNumber(current_time.getHours());
	let mm = checkNumber(current_time.getMinutes());
	let ss = checkNumber(current_time.getSeconds());

	let time_string = `${hh}:${mm}:${ss}`;
	document.getElementById("time").innerHTML = time_string;
	setTimeout(tick_timer, 1000);
}

function checkNumber(i)
{
	return i < 10 ? "0" + i : i;
}

function start_timer()
{
	let user_date_input = document.getElementById("user-date");
	let user_time_input = document.getElementById("user-time");
	let user_datetime_local = document.getElementById("user-datetime-local");

	let start_timer_button = document.getElementById("start-timer");

	let user_date = user_date_input.valueAsDate;
	let user_time = user_time_input.valueAsDate;

	document.getElementById("user-values-date").innerHTML = user_date;
	document.getElementById("user-values-time").innerHTML = user_time;
	document.getElementById("user-datetime-local-values").innerHTML = user_datetime_local.value;
	document.getElementById("user-datetime-local-timestamp").innerHTML = user_datetime_local.valueAsNumber;

	if (start_timer_button.value === "Start" && user_date_input.value !== "" && user_time_input.value !== "")
	{
		start_timer_button.value = "Stop";
		user_date_input.disabled = user_time_input.disabled = user_datetime_local.disabled = true;
		countdown_timer();
	}
	else
	{
		start_timer_button.value = "Start";
		user_date_input.disabled = user_time_input.disabled = false;
	}
}

function countdown_timer()
{
	let user_datetime = document.getElementById("user-datetime-local").valueAsNumber;
	let current_time = new Date();
	let timestamp = user_datetime - current_time;
	timestamp = Math.trunc(timestamp / 1000);
	document.getElementById("difference").innerHTML = timestamp;

	const SECONDS_IN_MINUTE = 60;
	const SECONDS_IN_HOUR = 3600;
	const SECONDS_IN_DAY = 86400;
	const SECONDS_IN_WEEK = 86400 * 7;
	const DAYS_IN_MONTH = 365 / 12;
	const SECONDS_IN_YEAR = SECONDS_IN_DAY * 365 + SECONDS_IN_HOUR * 6;


	setTimeout(countdown_timer, 1000);
}

