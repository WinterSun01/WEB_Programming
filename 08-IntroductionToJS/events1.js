//����������� ��� ���������
const showDateCheckbox = document.getElementById('show-date');
const showWeekdayCheckbox = document.getElementById('show-weekday');
const dateElement = document.getElementById('date');
const weekdayElement = document.getElementById('weekday');

//��� ���������� ������������ ������
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

//����������� ������� ��� ���������
showDateCheckbox.addEventListener('change', updateDateAndTime);
showWeekdayCheckbox.addEventListener('change', updateDateAndTime);

updateDateAndTime();
