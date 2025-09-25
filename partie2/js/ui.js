import { timer } from "./time.js";
import { compareAnswers } from "./quiz.js";
import { Score } from "./score.js";

export function renderQuestion(questions, index, score, onNext) {
  const container = document.getElementById("QuestionContainer");
  container.innerHTML = ""; // nettoyer avant de re-render

 if (index >= questions.length) {
  const input = document.getElementById("username"); // ton champ input où l’utilisateur écrit son nom
  Score(questions, score, container);
  return;
}


  const q = questions[index];

  // En-tête question + timer
  const header = document.createElement("div");
  header.classList.add("QuestionEtTime");

  const title = document.createElement("h2");
  title.classList.add("titleQuestionTotal");
  title.innerHTML = `Question <span>${index + 1}</span>`;

  const timeDiv = document.createElement("div");
  timeDiv.classList.add("time");
  timeDiv.id = "time";
  timeDiv.textContent = "20";

  
  



  header.appendChild(title);
  header.appendChild(timeDiv);



  // Texte de la question
  const questionText = document.createElement("p");
  questionText.classList.add("questionX");
  questionText.textContent = q.question;

  // Liste des réponses
  const answersDiv = document.createElement("div");
  answersDiv.classList.add("answers");

  q.answers.forEach((answer) => {
    const label = document.createElement("label");

    const input = document.createElement("input");
    input.type = "checkbox";
    input.name = "repence";
    input.classList.add("repanceCocher");
    input.value = answer;

    const span = document.createElement("span");
    span.textContent = answer;

    label.appendChild(input);
    label.appendChild(span);
    answersDiv.appendChild(label);
  });

  // Footer (question X sur Y + bouton Next)
  const footer = document.createElement("div");
  footer.classList.add("NextButtonEtnbrQustion");

  const progress = document.createElement("h2");
  progress.textContent = `Question ${index + 1} of ${questions.length}`;

  const nextBtn = document.createElement("button");
  nextBtn.id = "NextButton";
  nextBtn.classList.add("NextButton");
  nextBtn.textContent = "Next";

  footer.appendChild(progress);
  footer.appendChild(nextBtn);

  // Ajouter tout au container
  container.appendChild(header);
  container.appendChild(questionText);
  container.appendChild(answersDiv);
  container.appendChild(footer);

  // Lancer le timer
//   timer(questions, index);


  // Gestion du bouton Next
  nextBtn.addEventListener("click", () => {
    const checkboxes = document.querySelectorAll('input[name="repence"]:checked');
    const userAnswers = Array.from(checkboxes).map(cb => cb.value);
    let allAnswers = JSON.parse(localStorage.getItem("UserAnswers")) || [];

    allAnswers.push({
      question: q.question,
      answers: userAnswers
    });
    localStorage.setItem("UserAnswers", JSON.stringify(allAnswers));

    if (compareAnswers(userAnswers, q.correctAnswers)) {
      checkboxes.forEach(cb => cb.nextElementSibling.style.backgroundColor = "green");
      score++;
      localStorage.setItem("score", score);
    } else {
      checkboxes.forEach(cb => cb.nextElementSibling.style.backgroundColor = "red");
    }

    setTimeout(() => {
      onNext(index + 1, score);
    }, 2000);
  });
  timer(questions, index, score, onNext);

}
