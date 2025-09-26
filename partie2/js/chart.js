const ctx = document.getElementById('myChart').getContext('2d');
const byTheme = JSON.parse(localStorage.getItem("byTheme")) || {};

// labels = catégories
const labels = Object.keys(byTheme);
// data = nombre de parties par catégorie
const data = Object.values(byTheme);

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Nombre de parties jouées',
            data: data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)', // pour d’autres thèmes éventuels
                'rgba(255, 206, 86, 0.6)'
            ]
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
