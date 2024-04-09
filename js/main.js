const ctx = document.getElementById('myChart');
document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
            datasets: [{
                label: 'Mijn Energie Verbruik',
                data: [83, 72, 64, 78, 85, 68, 91, 77, 62, 79, 73, 88, 75],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(128, 0, 128, 0.2)',
                    'rgba(50, 205, 50, 0.2)',
                    'rgba(255, 0, 255, 0.2)',
                    'rgba(255, 255, 0, 0.2)',
                    'rgba(0, 255, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132)',
                    'rgba(255, 159, 64)',
                    'rgba(255, 205, 86)',
                    'rgba(75, 192, 192)',
                    'rgba(54, 162, 235)',
                    'rgba(153, 102, 255)',
                    'rgba(128, 0, 128)',
                    'rgba(50, 205, 50)',
                    'rgba(255, 0, 255)',
                    'rgba(255, 255, 0)',
                    'rgba(0, 255, 255)',
                    'rgba(201, 203, 207)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const eigenInbrengCtx = document.getElementById('eigenInbrengChart').getContext('2d');

    new Chart(eigenInbrengCtx, {
        type: 'doughnut',
        data: {
            labels: ['Elektra', 'Gas', 'Water', 'Hypotheek'],
            datasets: [{
                label: 'Mijn Eigen Inbreng',
                data: [65, 42, 32, 18],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)', // Rood
                    'rgba(54, 162, 235, 0.5)', // Lichtblauw
                    'rgba(255, 205, 86, 0.5)', // Geel
                    'rgba(75, 192, 192, 0.5)' // Cyaan
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)', // Rood
                    'rgba(54, 162, 235, 1)', // Lichtblauw
                    'rgba(255, 205, 86, 1)', // Geel
                    'rgba(75, 192, 192, 1)' // Cyaan
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Verdeling van Eigen Inbreng'
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    });
});
