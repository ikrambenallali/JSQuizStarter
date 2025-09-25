// time.js
import { Score } from "./score.js";
import { setItem , getItem } from "./storage.js";



export function timer(questions, index, score, onNext) {
    let timeLeft = 20;
    const q = questions[index];
    const timeDisplay = document.getElementById("time");

    // si un timer existait déjà, on l'arrête
    if (window.currentTimer) {
        clearInterval(window.currentTimer);
    }

    window.currentTimer = setInterval(() => {
        timeLeft--;
        if (timeDisplay) timeDisplay.textContent = `${timeLeft}s`;

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
                // let allAnswers = JSON.parse(localStorage.getItem("UserAnswers")) || [];
                let allAnswers = getItem("UserAnswers") || [];
                allAnswers.push({
                    question: q.question,
                    answers: []
                });
                // localStorage.setItem("UserAnswers", JSON.stringify(allAnswers));
                setItem("UserAnswers", allAnswers);

                // passer à la question suivante
                setTimeout(() => {
                    const nextIndex = index + 1;
                    if (nextIndex < questions.length) {
                        onNext(nextIndex, score);
                    } else {
                        const container = document.getElementById("QuestionContainer");
                        Score(questions, score, container);
                    }
                }, 2000);
            }
        }
    }, 1000);
}


let totalTime = 0;
let globalTimer = null;

export function startGlobalTimer() {
    const timeGlobalDisplay = document.getElementById("timeGlobal");
    totalTime = 0;

    // Si un timer existait déjà, on le reset
    if (globalTimer) {
        clearInterval(globalTimer);
    }

    globalTimer = setInterval(() => {
        totalTime++;
        if (timeGlobalDisplay) {
            // Format minutes:secondes
            const minutes = Math.floor(totalTime / 60);
            const seconds = totalTime % 60;
            timeGlobalDisplay.textContent = `Total Time: ${minutes}m ${seconds}s`;
        }
    }, 1000);
}

export function stopGlobalTimer() {
    if (globalTimer) {
        clearInterval(globalTimer);
        globalTimer = null;
    }
    return totalTime; // utile si tu veux récupérer le temps final
}



