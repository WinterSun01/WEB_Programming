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
    setTimeout(tick_timer, 1000);
}

function checkNumber(i)
{
    return i < 10 ? "0" + i : i;
}

function start_timer()
{
    let user_datetime_local = document.getElementById("user-datetime-local");
    let start_timer_button = document.getElementById("start-timer");

    document.getElementById("user-datetime-local-values").innerHTML = user_datetime_local.value;
    document.getElementById("user-datetime-local-timestamp").innerHTML = Math.trunc(user_datetime_local.valueAsNumber / 1000);

    if (start_timer_button.value === "Start" && user_datetime_local !== "")
    {
        start_timer_button.value = "Stop";
        user_datetime_local.disabled = true;
        countdown_timer();
    }
    else
    {
        start_timer_button.value = "Start";
        user_datetime_local.disabled = false;
    }

    let user_timezone_offset = new Date().getTimezoneOffset();
    let user_timezone = `UTC${user_timezone_offset > 0 ? '-' : '+'}${Math.abs(user_timezone_offset / 60)}`;
    document.getElementById("user-timezone").innerHTML = `Часовой пояс пользователя: ${user_timezone}`;
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

    current_time = Math.trunc(current_time / 1000);
    user_datetime = Math.trunc(user_datetime / 1000);
    document.getElementById("current-timestamp").innerHTML = current_time;
    let timestamp = user_datetime - current_time;
    let time_of_day = timestamp % SECONDS_IN_DAY;

    document.getElementById("difference").innerHTML = timestamp;

    let years = Math.trunc(timestamp / SECONDS_IN_YEAR);
    timestamp = Math.trunc(timestamp % SECONDS_IN_YEAR);

    let months = Math.trunc(timestamp / SECONDS_IN_MONTH);
    timestamp = Math.trunc(timestamp % SECONDS_IN_MONTH);

    let weeks = Math.trunc(timestamp / SECONDS_IN_WEEK);
    timestamp = Math.trunc(timestamp % SECONDS_IN_WEEK);

    let days = Math.trunc(timestamp / SECONDS_IN_DAY);
    timestamp = Math.trunc(timestamp % SECONDS_IN_DAY);

    let hours = Math.trunc(time_of_day / SECONDS_IN_HOUR);
    time_of_day = Math.trunc(time_of_day % SECONDS_IN_HOUR);

    let minutes = Math.trunc(time_of_day / SECONDS_IN_MINUTE);
    time_of_day = Math.trunc(time_of_day % SECONDS_IN_MINUTE);

    let seconds = Math.trunc(time_of_day);

    let display = document.getElementById("display");

    display.innerHTML = '';

    if (years > 0)
    {
        display.appendChild(createTimeBlock("years", years));
    }
    if (months > 0)
    {
        display.appendChild(createTimeBlock("months", months));
    }
    if (weeks > 0)
    {
        display.appendChild(createTimeBlock("weeks", weeks));
    }
    if (days > 0)
    {
        display.appendChild(createTimeBlock("days", days));
    }
    if (hours > 0)
    {
        display.appendChild(createTimeBlock("hours", hours));
    }
    if (minutes > 0)
    {
        display.appendChild(createTimeBlock("minutes", minutes));
    }
    if (seconds >= 0)
    {
        display.appendChild(createTimeBlock("seconds", seconds));
    }

    document.getElementById("time-units").innerHTML =
        `${years} years, ${months} months, ${weeks} weeks, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

    if (document.getElementById("start-timer").value === 'Stop')
    {
        setTimeout(countdown_timer, 1000);
    }
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
    marker.innerHTML = capitalizeFirstLetter(name);

    time_block.append(unit);
    time_block.append(marker);

    return time_block;
}

function capitalizeFirstLetter(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
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
