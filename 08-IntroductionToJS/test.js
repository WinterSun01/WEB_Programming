function checkAnswers()
{
    const correctAnswers =
    {
        q1: "b", // Сингапур
        q2: "c", // Боливия (37 официальных языков)
        q3: "a", // Финляндия
        q4: "c", // Уэльс (более 600 замков и дворцов)
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
