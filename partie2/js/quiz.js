import { Score } from "./score.js";
import { getItem, setItem } from "./storage.js";
import { renderQuestion } from "./ui.js";
import { startGlobalTimer, stopGlobalTimer } from "./time.js";


let questions = [];
let score = 0;
let currentIndex = 0;

// Récupération des questions depuis le fichier JSON
 async function fetchQuestions() {
    const excludeCategory = getItem("excludeCategory");
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


// Comparaison des réponses
export function compareAnswers(userAnswers, correctAnswers) {
    if (userAnswers.length !== correctAnswers.length) return false;
    return userAnswers.every(ans => correctAnswers.includes(ans));
}

export function startQuiz(data) {
  questions = data;
  score = 0;
  currentIndex = 0;
  startGlobalTimer();
  renderQuestion(questions, currentIndex, score, handleNext);
}

function handleNext(nextIndex, newScore) {
  currentIndex = nextIndex;
  score = newScore;
  renderQuestion(questions, currentIndex, score, handleNext);
}

export function saveUserAnswer(question, userAnswers) {
  let allAnswers = getItem("UserAnswers") || [];

  allAnswers.push({ question, answers: userAnswers });
  setItem("UserAnswers", allAnswers);
}

export function saveScore(score) {
    setItem("score", score);
}
fetchQuestions();
