// === Fonctions d'export ===
function exportJSON(key = "results", filename = "export.json") {
  const data = JSON.parse(localStorage.getItem(key)) || [];
  if (data.length === 0) {
    alert("Aucune donnée à exporter !");
    return;
  }
  
  const jsonStr = JSON.stringify(data, null, 2);

  // (Blob  c’est comme une boîte qui contient des données (texte, JSON, image, vidéo, etc))
  const blob = new Blob([jsonStr], { type: "application/json" });

  // Génère une URL temporaire (de type blob:) pointant sur le Blob en mémoire. Cette URL permet au navigateur de télécharger le contenu.
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  // Je n’ai plus besoin de cette URL blob, tu peux libérer la mémoire
  URL.revokeObjectURL(url);
}

function exportCSV(key = "results", filename = "export.csv") {
  const data = JSON.parse(localStorage.getItem(key)) || [];
  if (data.length === 0) {
    alert("Aucune donnée à exporter !");
    return;
  }

const headers = Object.keys(data[0]).slice(0,-2).join(",");
  // console.log(headers);
  const rows = data.map(obj => Object.values(obj).slice(0,-2).join(","));
  // console.log(rows);
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


// === Création dynamique des boutons ===
function createExportButtons() {
  const container = document.getElementById("exportContainer");
  
  if (!container) {
    console.error("Element 'exportContainer' non trouvé");
    return;
  }

  container.innerHTML = '';

  const exportTitle = document.createElement("h3");
  exportTitle.textContent = "Options of export";
  exportTitle.style.marginTop = "20px";
  container.appendChild(exportTitle);

  const buttonsDiv = document.createElement("div");
  buttonsDiv.style.display = "flex";
  buttonsDiv.style.gap = "10px";
  buttonsDiv.style.flexWrap = "wrap";
  buttonsDiv.style.marginBottom = "20px";

  // Bouton Export JSON
  const btnJSON = document.createElement("button");
  btnJSON.textContent = "Export JSON";
  btnJSON.className = "export-btn";
  btnJSON.onclick = () => exportJSON("results", "quiz_results.json");

  // Bouton Export CSV
  const btnCSV = document.createElement("button");
  btnCSV.textContent = "Export CSV";
  btnCSV.className = "export-btn";
  btnCSV.onclick = () => exportCSV("results", "quiz_results.csv");

 
  buttonsDiv.appendChild(btnJSON);
  buttonsDiv.appendChild(btnCSV);
 

  container.appendChild(buttonsDiv);

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