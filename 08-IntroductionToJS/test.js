function checkAnswers()
{
    const correctAnswers =
    {
        q1: "b", // Сингапур
        q2: "b", // Швейцария
        q3: "a", // Канада
        q4: "c", // Чехия
        q5: "a", // Венесуэла (Анхель — 979 м)
    };

    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;

    document.querySelectorAll(".answers label").forEach(label =>
    {
        label.style.color = "white";
    });

    for (let key in correctAnswers)
    {
        let selectedAnswer = document.querySelector(`input[name="${key}"]:checked`);

        if (selectedAnswer)
        {
            let label = selectedAnswer.parentElement;

            if (selectedAnswer.value === correctAnswers[key])
            {
                score++;
                label.style.color = "limegreen";
            } else
            {
                label.style.color = "red";
            }
        }
    }

    document.getElementById("result").innerText = `Вы ответили правильно на ${score} из ${totalQuestions} вопросов.`;
}
