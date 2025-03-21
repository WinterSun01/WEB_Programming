//обработчики для чекбоксов
const showDateCheckbox = document.getElementById('show-date');
const showWeekdayCheckbox = document.getElementById('show-weekday');
const dateElement = document.getElementById('date');
const weekdayElement = document.getElementById('weekday');

//для обновления отображаемых данных
function updateDateAndTime()
{
    const currentDate = new Date();
    const date = currentDate.toLocaleDateString();
    const weekday = currentDate.toLocaleString('default', { weekday: 'long' });

    if (showDateCheckbox.checked)
    {
        dateElement.textContent = date;
    } else
    {
        dateElement.textContent = '';
    }

    if (showWeekdayCheckbox.checked)
    {
        weekdayElement.textContent = weekday;
    } else {
        weekdayElement.textContent = '';
    }
}

//обработчики событий для чекбоксов
showDateCheckbox.addEventListener('change', updateDateAndTime);
showWeekdayCheckbox.addEventListener('change', updateDateAndTime);

updateDateAndTime();
