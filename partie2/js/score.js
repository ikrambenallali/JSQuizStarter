
import { getItem } from "./storage.js";
import { stopGlobalTimer } from "./time.js";
import { saveResult } from "./results.js";
export function Score(questions, score, QuestionContainer) {
    const username = getItem("username") || "Anonymous";
    const excludeCategory = getItem("excludeCategory");
    const savedAnswers = getItem("UserAnswers") || [];

    // QuestionContainer.innerHTML = "";
    saveResult(username, excludeCategory, score, savedAnswers);

    const finalTime = stopGlobalTimer();
    console.log("Final Time:", finalTime);

    const timeGlobalDiv = document.createElement("div");
    timeGlobalDiv.classList.add("timeGlobal");
    timeGlobalDiv.id = "timeGlobal";
    timeGlobalDiv.textContent = `Total Time: ${finalTime}s`;
    QuestionContainer.appendChild(timeGlobalDiv);
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("QuestionEtTime");

    
    

    const title = document.createElement("h2");
    title.classList.add("titleQuestionTotal");
    title.textContent = "Your Score";
    titleDiv.appendChild(title);

    const usernameEl = document.createElement("h2");
    usernameEl.classList.add("username");
    usernameEl.textContent = username;

    const themeEl = document.createElement("h2");
    themeEl.classList.add("theme");
    themeEl.textContent = `theme: ${excludeCategory}`;

    const scoreEl = document.createElement("p");
    scoreEl.classList.add("questionX");
    scoreEl.textContent = `You scored ${score} out of ${questions.length}`;

    const table = document.createElement("table");
    const headerRow = document.createElement("tr");
    ["Question", "Your Answer", "Correct Answer"].forEach(text => {
        const th = document.createElement("th");
        th.textContent = text;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    questions.forEach(q => {
        const row = document.createElement("tr");

        const questionCell = document.createElement("td");
        questionCell.textContent = q.question;

        const userAnswer = savedAnswers.find(ans => ans.question === q.question);

        const yourAnswerCell = document.createElement("td");
        yourAnswerCell.textContent = userAnswer ? userAnswer.answers.join(", ") : "—";

        const correctAnswerCell = document.createElement("td");
        correctAnswerCell.textContent = q.correctAnswers.join(", ");

        row.appendChild(questionCell);
        row.appendChild(yourAnswerCell);
        row.appendChild(correctAnswerCell);

        table.appendChild(row);
    });

    QuestionContainer.appendChild(titleDiv);
    QuestionContainer.appendChild(usernameEl);
    QuestionContainer.appendChild(themeEl);
    QuestionContainer.appendChild(scoreEl);
    QuestionContainer.appendChild(table);
}
