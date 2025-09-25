// import { getCategory, setCategory } from "./storage.js";
import { setItem, getItem } from "./storage.js";

const js = document.getElementById("javascript");
const html = document.getElementById("html");
const css = document.getElementById("css");

function goToQuiz(excludeCategory) {
    setItem("excludeCategory", excludeCategory);
    console.log("Catégorie stockée :", getItem("excludeCategory"));

    window.location.href = "quiz.html";
}

js.addEventListener("click", () => goToQuiz("JavaScript"));
html.addEventListener("click", () => goToQuiz("HTML"));
css.addEventListener("click", () => goToQuiz("CSS"));



