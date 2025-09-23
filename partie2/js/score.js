let score = 0;

export function Score(questions, score) {
    const username = input.value;
    const excludeCategory = localStorage.getItem("excludeCategory");
    const savedAnswers = JSON.parse(localStorage.getItem("UserAnswers")) || [];

    QuestionContainer.innerHTML = `
    <div>
      <div class="QuestionEtTime">
        <h2 class="titleQuestionTotal">Your Score</h2>
        
        </div>
        <h2 class="username">${username}</h2>
        <h2 class="theme">theme: ${excludeCategory}</h2>

      <p class="questionX">You scored ${score} out of ${questions.length}</p>

      <table>
        <tr>
          <th>Question</th>
          <th>Your Answer</th>
          <th>Correct Answer</th>
        </tr>
        ${questions.map((q, index) => {
          const userAnswer = savedAnswers.find(ans => ans.question === q.question);
        console.log(userAnswer);
        return `
            <tr>
              <td>${q.question}</td>
              <td>${userAnswer? userAnswer.answers.join(", ") : "—"}</td>
              <td>${q.correctAnswers.join(", ")}</td>
            </tr>
          `;
    }).join("")}
      </table>
    </div>
  `;
}