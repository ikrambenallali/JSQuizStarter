const categories = ["JavaScript", "HTML", "CSS"];
const languagesGrid = document.getElementById("languagesGrid");
categories.forEach(category => {
    const card = document.createElement("div");
    card.className = "language-card";
    card.style.cursor = "pointer";
    card.innerHTML = `
        <h2>${category}</h2>
        <p>Test your knowledge in ${category}!</p>
    `;
    languagesGrid.appendChild(card);
    card.addEventListener("click", () => {
        localStorage.setItem("excludeCategory", category);
        console.log("Stocké dans localStorage :", localStorage.getItem("excludeCategory"));
        window.location.href = "../Html/quiz.html";
    });
});



