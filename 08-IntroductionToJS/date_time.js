// JavaScript source code
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
	setTimeout(tick_timer, 1000);	//setTimeout(function_pointer, milliseconds)
}

function checkNumber(i)
{
	return i < 10 ? "0" + i : i;
}

//function start_timer()
//{
//	let user_datetime_local = document.getElementById("user-datetime-local");

//	let start_timer_button = document.getElementById("start-timer");

//	document.getElementById("user-datetime-local-timestamp").innerHTML = Math.trunc(user_datetime_local.valueAsNumber / 1000);

//	if (start_timer_button.value === "Start" && user_datetime_local !== "")
//	{
//		start_timer_button.value = "Stop";
//		user_datetime_local.disabled = true;
//		countdown_timer();
//	}
//	else
//	{
//		start_timer_button.value = "Start";
//		user_datetime_local.disabled = false;
//	}
//}

//function countdown_timer()
//{
//    const SECONDS_IN_MINUTE = 60;
//    const SECONDS_IN_HOUR = 3600;
//    const SECONDS_IN_DAY = 86400;
//    const SECONDS_IN_WEEK = SECONDS_IN_DAY * 7;
//    const DAYS_IN_MONTH = 365 / 12;
//    const SECONDS_IN_MONTH = DAYS_IN_MONTH * SECONDS_IN_DAY;
//    const SECONDS_IN_YEAR = SECONDS_IN_DAY * 365 + SECONDS_IN_HOUR * 6;

//    let user_datetime = new Date(document.getElementById("user-datetime-local").value);
//    let current_time = new Date();

//    let user_timestamp = Math.trunc(user_datetime.getTime() / 1000);
//    let current_timestamp = Math.trunc(current_time.getTime() / 1000);

//    let timestamp = user_timestamp - current_timestamp;

//    if (timestamp <= 0) 
//    {
//        document.getElementById("time-units").innerHTML = "00:00:00";
//        document.getElementById("countdown-display").innerHTML = "";
//        return;
//    }

//    let years = Math.trunc(timestamp / SECONDS_IN_YEAR);
//    timestamp %= SECONDS_IN_YEAR;

//    let months = Math.trunc(timestamp / SECONDS_IN_MONTH);
//    timestamp %= SECONDS_IN_MONTH;

//    let weeks = Math.trunc(timestamp / SECONDS_IN_WEEK);
//    timestamp %= SECONDS_IN_WEEK;

//    let days = Math.trunc(timestamp / SECONDS_IN_DAY);
//    timestamp %= SECONDS_IN_DAY;

//    let hours = Math.trunc(timestamp / SECONDS_IN_HOUR);
//    timestamp %= SECONDS_IN_HOUR;

//    let minutes = Math.trunc(timestamp / SECONDS_IN_MINUTE);
//    let seconds = timestamp % SECONDS_IN_MINUTE;

//    let formatted_date = `${user_datetime.getFullYear()}-${String(user_datetime.getMonth() + 1).padStart(2, "0")}-${String(user_datetime.getDate()).padStart(2, "0")}`;
//    let weekday = user_datetime.toLocaleString("en-US", { weekday: "long" });
//    let formatted_time = `${String(user_datetime.getHours()).padStart(2, "0")}:${String(user_datetime.getMinutes()).padStart(2, "0")}`;

//    document.getElementById("user-values-date").innerHTML = `User Date: ${formatted_date} ${weekday} ${formatted_time}`;
//    document.getElementById("user-datetime-local-timestamp").innerHTML = `User Timestamp: ${user_timestamp}`;
//    document.getElementById("current-timestamp").innerHTML = `Current Timestamp: ${current_timestamp}`;
//    document.getElementById("difference").innerHTML = `Difference: ${user_timestamp - current_timestamp} seconds`;

//    document.getElementById("time-units").innerHTML =
//        `${years} years, ${months} months, ${weeks} weeks, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

//    let timeDisplay = "";
//    function createTimeBlock(value, label)
//    {
//        return `<div class="time-block">
//                    <div class="time-value">${String(value).padStart(2, "0")}</div>
//                    <div class="time-label">${label}</div>
//                </div>`;
//    }

//    if (years > 0) timeDisplay += createTimeBlock(years, "Years");
//    if (months > 0) timeDisplay += createTimeBlock(months, "Months");
//    if (weeks > 0) timeDisplay += createTimeBlock(weeks, "Weeks");
//    if (days > 0) timeDisplay += createTimeBlock(days, "Days");
//    if (hours > 0) timeDisplay += createTimeBlock(hours, "Hours");
//    if (minutes > 0) timeDisplay += createTimeBlock(minutes, "Minutes");
//    if (seconds > 0 || timeDisplay === "") timeDisplay += createTimeBlock(seconds, "Seconds");

//    document.getElementById("countdown-display").innerHTML = timeDisplay;

//    setTimeout(countdown_timer, 1000);
//}
function start_timer()
{
	let user_datetime_local = document.getElementById("user-datetime-local");

	let start_timer_button = document.getElementById("start-timer");

	document.getElementById("user-datetime-local-values").innerHTML = user_datetime_local.value;
	document.getElementById("user-datetime-local-timestamp").innerHTML = Math.trunc(user_datetime_local.valueAsNumber / 1000);

	if (start_timer_button.value === "Start" && user_datetime_local !== "")
	{
		start_timer_button.value = "Stop";
		countdown_timer();
	}
	else
	{
		start_timer_button.value = "Start";
		user_datetime_local.disabled = false;
	}
}
function countdown_timer()
{
	const SECONDS_IN_MINUTE = 60;
	const SECONDS_IN_HOUR = 3600;
	const SECONDS_IN_DAY = 86400;
	const SECONDS_IN_WEEK = 86400 * 7;
	const DAYS_IN_MONTH = 365 / 12;
	const SECONDS_IN_MONTH = DAYS_IN_MONTH * SECONDS_IN_DAY;
	const SECONDS_IN_YEAR = SECONDS_IN_DAY * 365 + SECONDS_IN_HOUR * 6;

	let user_datetime = +new Date(document.getElementById("user-datetime-local").value);
	let current_time = +new Date();
	let timezone_offset = new Date().getTimezoneOffset() / 60;

	document.getElementById("current-timezone").innerHTML = `Current timezone: ${timezone_offset}`
	document.getElementById("user-timezone").innerHTML = `User timezone: ${document.getElementById("user-datetime-local").valueAsDate}`
	current_time = Math.trunc(current_time / 1000);
	user_datetime = Math.trunc(user_datetime / 1000);
	document.getElementById("current-timestamp").innerHTML = current_time;
	let timestamp = user_datetime - current_time;
	let time_of_day = timestamp % SECONDS_IN_DAY;

	document.getElementById("difference").innerHTML = timestamp;
	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	let years = Math.trunc(timestamp / SECONDS_IN_YEAR);
	let display = document.getElementById("display");
	if (years != 0)
	{
		timestamp = Math.trunc(timestamp % (years * SECONDS_IN_YEAR));
		let years_unit = document.getElementById("years-unit");
		if (years == null)
			display.prepend(createTimeBlock("years", years));
	}
	else removeTimeBlock("years");


	let months = Math.trunc(timestamp / SECONDS_IN_MONTH);
	if (months > 0) {
		timestamp = Math.trunc(timestamp % (months * SECONDS_IN_MONTH));
		let months_unit = document.getElementById("months-unit");
		if (months_unit == null) {
			let years_unit = document.getElementById("years-unit");
		}
	}

	let weeks = Math.trunc(timestamp / SECONDS_IN_WEEK);
	if (weeks > 0)
	{
		timestamp = Math.trunc(timestamp % (weeks * SECONDS_IN_WEEK));
	}

	let days = Math.trunc(timestamp / SECONDS_IN_DAY);
	if (days > 0)
	{
		timestamp = Math.trunc(timestamp % (days * SECONDS_IN_DAY));
	}

	let hours = Math.trunc(time_of_day / SECONDS_IN_HOUR);
	if (hours > 0)
	{
		time_of_day = Math.trunc(time_of_day % (hours * SECONDS_IN_HOUR));
	}

	let minutes = Math.trunc(time_of_day / SECONDS_IN_MINUTE);
	if (minutes > 0)
	{
		time_of_day = Math.trunc(time_of_day % (minutes * SECONDS_IN_MINUTE));
	}

	let seconds = Math.trunc(time_of_day);

	let debug_display = document.getElementById("display");
	console.log(debug_display.children.length);

	document.getElementById("hours-unit").innerHTML = hours;
	document.getElementById("minutes-unit").innerHTML = minutes;
	document.getElementById("seconds-unit").innerHTML = seconds;

	document.getElementById("time-units").innerHTML =
		`${years} years, ${months} monthes, ${weeks} weeks, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

	if (document.getElementById("start-timer").value === 'Stop')
		setTimeout(countdown_timer, 1000);
}

function createTimeBlock(name, value)
{
	let time_block = document.createElement("div");
	time_block.className = "time-block";

	let unit = document.createElement("div");
	unit.id = `${name}-unit`;
	unit.className = "time-unit";
	unit.innerHTML = checkNumber(value);

	let marker = document.createElement("div");
	marker.id = `${name}-marker`;
	marker.className = "time-marker";
	marker.innerHTML = name;

	time_block.append(unit);
	time_block.append(marker);

	return time_block;
}
function removeTimeBlock(name)
{
	let unit = document.getElementById(`${name}-unit`);
	if (unit != null)
	{
		let block = unit.parentElement;
		let display = block.parentElement;
		display.removeChild(block);
	}
}







