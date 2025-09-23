
const js = document.getElementById("javascript");
const html = document.getElementById("html");
const css = document.getElementById("css");

function goToQuiz(excludeCategory) {
    localStorage.setItem("excludeCategory", excludeCategory);
        console.log("Stocké dans localStorage :", localStorage.getItem("excludeCategory"));

    window.location.href = "quiz.html";
}

js.addEventListener("click", () => goToQuiz("JavaScript"));
html.addEventListener("click", () => goToQuiz("HTML"));
css.addEventListener("click", () => goToQuiz("CSS"));



