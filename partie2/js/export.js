// === Fonctions d'export ===
function exportJSON(key = "results", filename = "export.json") {
  const data = JSON.parse(localStorage.getItem(key)) || [];
  if (data.length === 0) {
    alert("Aucune donnée à exporter !");
    return;
  }
  
  const jsonStr = JSON.stringify(data, null, 2);

  const blob = new Blob([jsonStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function exportCSV(key = "results", filename = "export.csv") {
  const data = JSON.parse(localStorage.getItem(key)) || [];
  if (data.length === 0) {
    alert("Aucune donnée à exporter !");
    return;
  }

  const headers = Object.keys(data[0]).join(",");
  const rows = data.map(obj => Object.values(obj).join(","));
  const csvStr = [headers, ...rows].join("\n");

  const blob = new Blob([csvStr], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

// Fonction spéciale pour exporter les stats par thème en CSV
function exportThemeStatsCSV() {
  const data = JSON.parse(localStorage.getItem("byTheme")) || {};
  if (Object.keys(data).length === 0) {
    alert("Aucune statistique à exporter !");
    return;
  }

  const csvStr = "Thematique,Nombre_de_parties\n" + 
    Object.entries(data).map(([theme, count]) => `${theme},${count}`).join("\n");

  const blob = new Blob([csvStr], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "themes_stats.csv";
  a.click();
  URL.revokeObjectURL(url);
}

// === Création dynamique des boutons ===
function createExportButtons() {
  const container = document.getElementById("exportContainer");
  
  // Vérifier que l'élément existe
  if (!container) {
    console.error("Element 'exportContainer' non trouvé");
    return;
  }

  // Nettoyer le container au cas où
  container.innerHTML = '';

  // Créer un titre pour la section export
  const exportTitle = document.createElement("h3");
  exportTitle.textContent = "Options d'export";
  exportTitle.style.marginTop = "20px";
  container.appendChild(exportTitle);

  // Container pour les boutons
  const buttonsDiv = document.createElement("div");
  buttonsDiv.style.display = "flex";
  buttonsDiv.style.gap = "10px";
  buttonsDiv.style.flexWrap = "wrap";
  buttonsDiv.style.marginBottom = "20px";

  // Bouton Export JSON
  const btnJSON = document.createElement("button");
  btnJSON.textContent = "Exporter résultats (JSON)";
  btnJSON.className = "export-btn";
  btnJSON.onclick = () => exportJSON("results", "quiz_results.json");

  // Bouton Export CSV
  const btnCSV = document.createElement("button");
  btnCSV.textContent = "Exporter résultats (CSV)";
  btnCSV.className = "export-btn";
  btnCSV.onclick = () => exportCSV("results", "quiz_results.csv");

 
  // Ajouter les boutons dans le container
  buttonsDiv.appendChild(btnJSON);
  buttonsDiv.appendChild(btnCSV);
 

  container.appendChild(buttonsDiv);

  // Ajouter quelques styles CSS basiques
  const style = document.createElement("style");
  style.textContent = `
    .export-btn {
      padding: 8px 16px;
      margin: 4px;
      background-color: rgb(103, 77, 127) ;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
    }
 
  `;
  document.head.appendChild(style);
}