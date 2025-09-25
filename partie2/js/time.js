// time.js
import { Score } from "./score.js";

export function timer(questions, index, score, onNext) {
    let timeLeft = 20;
    const q = questions[index];
    const timeDisplay = document.getElementById('time');

    if (window.currentTimer) {
        clearInterval(window.currentTimer);
    }

    window.currentTimer = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = `${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(window.currentTimer);

            const checkboxes = document.querySelectorAll('input[name="repence"]:checked');

            if (checkboxes.length === 0) {
                // colorier les bonnes réponses
                q.correctAnswers.forEach(correct => {
                    const answers = document.querySelectorAll('.answers span');
                    answers.forEach(span => {
                        if (span.textContent === correct) {
                            span.style.backgroundColor = 'green';
                        }
                    });
                });

                // enregistrer que l'utilisateur n'a rien répondu
                let allAnswers = JSON.parse(localStorage.getItem("UserAnswers")) || [];
                allAnswers.push({
                    question: q.question,
                    answers: []
                });
                localStorage.setItem("UserAnswers", JSON.stringify(allAnswers));

                // passer à la suite via callback
                setTimeout(() => {
                    const nextIndex = index + 1;
                    if (nextIndex < questions.length) {
                        onNext(nextIndex); // ✅ on délègue la suite
                    } else {
                        Score(questions, score);
                    }
                }, 2000);
            }
        }
    }, 1000);
}
