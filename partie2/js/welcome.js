import { getCategory, setCategory } from "./storage.js";

const js = document.getElementById("javascript");
const html = document.getElementById("html");
const css = document.getElementById("css");

function goToQuiz(excludeCategory) {
    setCategory(excludeCategory);
    // localStorage.setItem("excludeCategory", excludeCategory);
    //     console.log("Stocké dans localStorage :", localStorage.getItem("excludeCategory"));
    console.log("Catégorie stockée :", getCategory);

    window.location.href = "quiz.html";
}

js.addEventListener("click", () => goToQuiz("JavaScript"));
html.addEventListener("click", () => goToQuiz("HTML"));
css.addEventListener("click", () => goToQuiz("CSS"));



