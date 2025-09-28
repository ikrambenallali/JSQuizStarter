import { getItem } from "./storage.js";

function renderHistory() {
  const container = document.getElementById("historyContainer");
  container.innerHTML = ""; // nettoyage

  const results = getItem("results") || [];

  const title = document.createElement("h2");
  title.className = "titleQuestionTotal";
  title.textContent = "Historique des parties";
  container.appendChild(title);
       

  if (results.length === 0) {
    const emptyMsg = document.createElement("p");
    emptyMsg.textContent = "Aucun résultat enregistré pour l'instant.";
    container.appendChild(emptyMsg);
    return;
  }

  // Tableau des résultats
  const table = document.createElement("table");

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  ["Pseudo", "Thématique", "Score", "Date"].forEach(text => {
    const th = document.createElement("th");
    th.textContent = text;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  results.forEach(res => {
    const row = document.createElement("tr");

    const tdUser = document.createElement("td");
    tdUser.textContent = res.username;
    row.appendChild(tdUser);

    const tdTheme = document.createElement("td");
    tdTheme.textContent = res.category;
    row.appendChild(tdTheme);

    const tdScore = document.createElement("td");
    tdScore.textContent = res.score;
    row.appendChild(tdScore);

    const tdDate = document.createElement("td");
    const d = new Date(res.date);
    tdDate.textContent = d.toLocaleString();
    row.appendChild(tdDate);

    tbody.appendChild(row);
  });
  table.appendChild(tbody);
  container.appendChild(table);

  // --- Statistiques ---

  // Nb parties par thématique
  const byTheme = results.reduce((acc, r) => {
    acc[r.category] = (acc[r.category] || 0) + 1;
    return acc;
  }, {});
  // Sauvegarde pour chart.js
  localStorage.setItem("byTheme", JSON.stringify(byTheme));

  // Score moyen par thématique
  const avgByTheme = results.reduce((acc, r) => {
    if (!acc[r.category]) acc[r.category] = { sum: 0, count: 0 };
    acc[r.category].sum += r.score;
    acc[r.category].count++;
    return acc;
  }, {});
  Object.keys(avgByTheme).forEach(cat => {
    avgByTheme[cat] = (avgByTheme[cat].sum / avgByTheme[cat].count).toFixed(2);
  });

  // Meilleur score global
  const best = results.reduce((max, r) => r.score > max.score ? r : max, results[0]);

  // Classement top 3 pseudos (par score décroissant)
  const top3 = [...results]
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  const statsDiv = document.createElement("div");
  statsDiv.className = "stats";

  const h3 = document.createElement("h3");
  h3.textContent = "Statistiques globales";
  statsDiv.appendChild(h3);

  // Nb parties par thème
  const ulCount = document.createElement("ul");
  Object.entries(byTheme).forEach(([cat, count]) => {
    const li = document.createElement("li");
    li.textContent = `${cat} : ${count} partie(s)`;
    ulCount.appendChild(li);
  });
  statsDiv.appendChild(ulCount);

  // Moyenne par thème
  const ulAvg = document.createElement("ul");
  Object.entries(avgByTheme).forEach(([cat, avg]) => {
    const li = document.createElement("li");
    li.textContent = `Score moyen ${cat} : ${avg}`;
    ulAvg.appendChild(li);
  });
  statsDiv.appendChild(ulAvg);

  // Meilleur score global
  const bestP = document.createElement("p");
  bestP.textContent = `Meilleur score : ${best.username} (${best.score})`;
  statsDiv.appendChild(bestP);

  // Top 3
  const top3Title = document.createElement("h4");
  top3Title.textContent = "Top 3 joueurs";
  statsDiv.appendChild(top3Title);

  const olTop = document.createElement("ol");
  top3.forEach(r => {
    const li = document.createElement("li");
    li.textContent = `${r.username} (${r.score})`;
    olTop.appendChild(li);
  });
  statsDiv.appendChild(olTop);

  container.appendChild(statsDiv);
}

// Attendre que le DOM soit chargé avant d'exécuter
document.addEventListener('DOMContentLoaded', function() {
  renderHistory();
  // Vérifier que la fonction existe avant de l'appeler
  if (typeof createExportButtons === 'function') {
    createExportButtons();
  }
});