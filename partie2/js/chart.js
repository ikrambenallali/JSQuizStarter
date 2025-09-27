// -------- Graphique 1 : Répartition par thématique --------
const ctx = document.getElementById('myChart').getContext('2d');
const byTheme = JSON.parse(localStorage.getItem("byTheme")) || {};

// labels = catégories
const labels = Object.keys(byTheme);
const data = Object.values(byTheme);

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Nombre de parties jouées',
            data: data,
            backgroundColor: [
                'rgba(225, 146, 212, 0.7)', // #E192D4
                'rgba(221, 110, 202, 0.7)', // #DD6ECA
                'rgba(196, 71, 175, 0.7)',  // #C447AF
                'rgba(251, 244, 250, 0.7)'  // #FBF4FA
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


// -------- Graphique 2 : Progression des scores dans le temps --------
const ctx2 = document.getElementById('scoreChart').getContext('2d');
const results = JSON.parse(localStorage.getItem("results")) || [];

// On trie les résultats par date
results.sort((a, b) => new Date(a.date) - new Date(b.date));

const scoreLabels = results.map(r => new Date(r.date).toLocaleDateString());
const scoreData = results.map(r => r.score);

new Chart(ctx2, {
    type: 'line',
    data: {
        labels: scoreLabels,
        datasets: [{
            label: 'Progression des scores',
            data: scoreData,
            borderColor: '#C447AF',          // violet foncé
            backgroundColor: 'rgba(225, 146, 212, 0.2)', // rose clair transparent
            fill: true,
            tension: 0.3, // courbe lissée
            pointRadius: 5,
            pointBackgroundColor: '#DD6ECA', // rose moyen
            pointBorderColor: '#C447AF'
        }]
    },
    options: {
        responsive: true,
        scales: { y: { beginAtZero: true } }
    }
});
