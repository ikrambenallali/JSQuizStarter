import { Score } from "./score.js";
// import { timer } from "./time.js";
import { renderQuestion } from "./ui.js";

let questions = [];
let score = 0;
let currentIndex = 0;

// Récupération des questions depuis le fichier JSON
 async function fetchQuestions() {
    const excludeCategory = localStorage.getItem("excludeCategory");
    let url = '';
    if (excludeCategory === "JavaScript") {
        url = '../data/javascript.json';
    } else if (excludeCategory === "HTML") {
        url = '../data/html.json';
    } else if (excludeCategory === "CSS") {
        url = '../data/css.json';
    }

    try {
        const response = await fetch(url);
        const data = await response.json();
        questions = data.data;
        console.log("Questions récupérées :", questions);
        startQuiz(questions);

    } catch (error) {
        console.error('Error fetching questions:', error);
    }
}

// Affichage des questions
// function afficherQuestions(index) {
//     const QuestionContainer = document.getElementById('QuestionContainer');
//     if (index >= questions.length) {
//         console.log("hi", questions);
//         QuestionContainer.innerHTML = `<h2>Quiz terminé</h2>
//             <p>Score final : ${score} / ${questions.length}</p>`;
//         return;
//     }

//     const q = questions[index];
//     QuestionContainer.innerHTML = `
//     <div>
//       <div class="QuestionEtTime">
//         <h2 class="titleQuestionTotal">Question <span>${index + 1}</span></h2>
//         <div class="time" id="time">20</div>
//       </div>
//       <p class="questionX">${q.question}</p>
//       <div class="answers"> 
//         ${q.answers.map((answer) => `
//             <label>
//                 <input type="checkbox" name="repence" class="repanceCocher" value="${answer}">
//                 <span>${answer}</span>
//             </label>
//         `).join('')}
//       </div>
//       <div class="NextButtonEtnbrQustion">
//         <h2>Question ${index + 1} of ${questions.length}</h2>
//         <button id="NextButton" class="NextButton">Next</button>
//       </div>
//     </div>
//   `;

//     timer(questions, index);

//     const NextButton = document.getElementById('NextButton');
//     NextButton.addEventListener('click', () => {
//         const checkboxes = document.querySelectorAll('input[name="repence"]:checked');
//         const userAnswers = Array.from(checkboxes).map(cb => cb.value);
//         let allAnswers = JSON.parse(localStorage.getItem("UserAnswers")) || [];


//         allAnswers.push({
//             question: q.question,
//             answers: userAnswers
//         });
//         localStorage.setItem("UserAnswers", JSON.stringify(allAnswers));

//         if (compareAnswers(userAnswers, q.correctAnswers)) {
//             checkboxes.forEach(cb => cb.nextElementSibling.style.backgroundColor = 'green');
//             score++;
//             localStorage.setItem("score", score);
//         } else {
//             checkboxes.forEach(cb => cb.nextElementSibling.style.backgroundColor = 'red');
//         }

//         setTimeout(() => {
//             QuestionActuelIndex++;
//             afficherQuestions(QuestionActuelIndex);
//            Score(questions, score);
//         }, 2000);
//     });
// }

// Comparaison des réponses
export function compareAnswers(userAnswers, correctAnswers) {
    if (userAnswers.length !== correctAnswers.length) return false;
    return userAnswers.every(ans => correctAnswers.includes(ans));
}




export function startQuiz(data) {
  questions = data;
  score = 0;
  currentIndex = 0;

  renderQuestion(questions, currentIndex, score, handleNext);
}

function handleNext(nextIndex, newScore) {
  currentIndex = nextIndex;
  score = newScore;
  renderQuestion(questions, currentIndex, score, handleNext);
}
export function saveUserAnswer(question, userAnswers) {
  let allAnswers = JSON.parse(localStorage.getItem("UserAnswers")) || [];
  allAnswers.push({ question, answers: userAnswers });
  localStorage.setItem("UserAnswers", JSON.stringify(allAnswers));
}

export function saveScore(score) {
  localStorage.setItem("score", score);
}
fetchQuestions();
