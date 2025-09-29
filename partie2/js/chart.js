//========================= Graphique 1 : Répartition par thématique =======================
const ctx = document.getElementById('myChart').getContext('2d');
const byTheme = JSON.parse(localStorage.getItem("byTheme")) || {};

// labels = catégories
// tableaux
const labels = Object.keys(byTheme);
const data = Object.values(byTheme);

new Chart(ctx, {
    // bar, line, pie, doughnut, radar, polarArea, bubble, scatter
    type: 'bar', 
    data: {
        labels: labels,
        datasets: [{
            label: 'Nombre de parties jouées',
            data: data,
            backgroundColor: [
                'rgba(225, 146, 212, 0.7)',
                'rgba(221, 110, 202, 0.7)', 
                'rgba(196, 71, 175, 0.7)',  
                'rgba(251, 244, 250, 0.7)'
            ],
            borderColor: [
                '#E192D4',
                '#DD6ECA',
                '#C447AF',
                '#FBF4FA'
            ],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true }
        }
    }
});


// ===================== Graphique 2 : Progression des scores dans le temps ======================================
const ctx2 = document.getElementById('scoreChart').getContext('2d');
const results = JSON.parse(localStorage.getItem("results")) || [];

// On trie les résultats par date (du plus ancien au plus récent)
results.sort((a, b) => new Date(a.date) - new Date(b.date));


// Crée un tableau des dates formatées (par ex. "28/09/2025") pour servir de labels sur l’axe X.
const scoreLabels = results.map(r => new Date(r.date).toLocaleDateString());

// Creer un tableau des scores correspondants pour l’axe Y.
const scoreData = results.map(r => r.score);

new Chart(ctx2, {
    type: 'line',
    data: {
        labels: scoreLabels,
        datasets: [{
            label: 'Progression des scores',
            data: scoreData,
            borderColor: '#C447AF',          
            backgroundColor: 'rgba(225, 146, 212, 0.2)', 
            // fill: true = remplit l’espace sous la courbe avec backgroundColor.
            fill: true,
            // 0.3 → courbe fluide mais pas trop
            tension: 0.3, 
            pointRadius: 5,
            pointBackgroundColor: '#DD6ECA', 
            pointBorderColor: '#C447AF'
        }]
    },
    options: {
        responsive: true,
        scales: { y: { beginAtZero: true } }
    }
});
