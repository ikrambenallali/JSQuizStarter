// let score = 0;

// export function Score(questions, score) {
//     const username = input.value;
//     const excludeCategory = localStorage.getItem("excludeCategory");
//     const savedAnswers = JSON.parse(localStorage.getItem("UserAnswers")) || [];

//     QuestionContainer.innerHTML = `
//     <div>
//       <div class="QuestionEtTime">
//         <h2 class="titleQuestionTotal">Your Score</h2>
        
//         </div>
//         <h2 class="username">${username}</h2>
//         <h2 class="theme">theme: ${excludeCategory}</h2>

//       <p class="questionX">You scored ${score} out of ${questions.length}</p>

//       <table>
//         <tr>
//           <th>Question</th>
//           <th>Your Answer</th>
//           <th>Correct Answer</th>
//         </tr>
//         ${questions.map((q, index) => {
//           const userAnswer = savedAnswers.find(ans => ans.question === q.question);
//         console.log(userAnswer);
//         return `
//             <tr>
//               <td>${q.question}</td>
//               <td>${userAnswer? userAnswer.answers.join(", ") : "—"}</td>
//               <td>${q.correctAnswers.join(", ")}</td>
//             </tr>
//           `;
//     }).join("")}
//       </table>
//     </div>
//   `;
// }
// score.js
export function Score(questions, score, QuestionContainer) {
  const username = localStorage.getItem("username") || "Anonymous";
  const excludeCategory = localStorage.getItem("excludeCategory");
  const savedAnswers = JSON.parse(localStorage.getItem("UserAnswers")) || [];

  QuestionContainer.innerHTML = "";

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
