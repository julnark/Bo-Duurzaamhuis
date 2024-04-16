//Grafiek Voor Energie Verbruik
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
                    '#4F6F52',
                    '#739072',
                    '#86A789',
                    '#D2E3C8',
                    '#5F8670',
                    '#C3E2C2',
                    '#EAECCC',
                    '#527853',
                    '#5F6F52',
                    '#A9B388',
                    '#C7DCA7',
                    '#9FBB73'
                ],
                borderColor: [
                    '#405D42',
                    '#5A7E5E',
                    '#6E9470',
                    '#B9D0B2',
                    '#4B725C',
                    '#A9D9AC',
                    '#D6D4B3',
                    '#3E5B42',
                    '#4B5D42',
                    '#92A273',
                    '#ADC491',
                    '#879A5E'
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

//Grafiek voor Eigen Inbreng
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
                    '#627254',
                    '#76885B',
                    '#B0C5A4',
                    '#CCD3CA',
                ],
                borderColor: [
                    '#4E5F42',
                    '#5E7049',
                    '#99AE8F',
                    '#B3B9B0',
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

//Timer voor na een bepaalde tijd licht uit doen
const startButton = document.getElementById("js--start");
const stopButton = document.getElementById("js--stop");
const resetButton = document.getElementById("js--reset");
const minutesInput = document.getElementById("js--minutesInput");
const secondsInput = document.getElementById("js--secondsInput");
let seconds = 0;
let minutes = 0;
let running = false;

const secondsTimer = document.getElementById("js--secondsTimer");
const minutesTimer = document.getElementById("js--minutesTimer");

let timer;
if (startButton !== null) {


    startButton.onclick = function () {
        if (running === true) {
            return;
        }
        running = true;
        const totalSeconds = parseInt(minutesInput.value) * 60 + parseInt(secondsInput.value);
        if (isNaN(totalSeconds) || totalSeconds <= 0) {
            return;
        }
        seconds = totalSeconds % 60;
        minutes = Math.floor(totalSeconds / 60);
        updateTimerDisplay();
        timer = setInterval(function () {
            if (seconds === 0 && minutes === 0) {
                clearInterval(timer);
                running = false;
                return;
            }
            if (seconds === 0) {
                minutes--;
                seconds = 59;
            } else {
                seconds--;
            }
            updateTimerDisplay();
        }, 1000);
    }
}
if (stopButton !== null) {  
    stopButton.onclick = function () {
        clearInterval(timer);
        running = false;
    }
}
if (resetButton !== null) {
    resetButton.onclick = function () {
        clearInterval(timer);
        running = false;
        minutes = 0;
        seconds = 0;
        minutesInput.value = "";
        secondsInput.value = "";
        updateTimerDisplay();
    }
}
function updateTimerDisplay() {
    secondsTimer.innerText = seconds < 10 ? "0" + seconds : seconds;
    minutesTimer.innerText = minutes < 10 ? "0" + minutes : minutes;
}

//Grafiek Zonnepanelen
const Zonnepanelenctx = document.getElementById('ZonnepanelenChart');
document.addEventListener('DOMContentLoaded', function () {
    new Chart(Zonnepanelenctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
            datasets: [{
                label: 'Opbrengst Zonnenpanelen KWH',
                data: [20, 26, 32, 25, 45, 57, 63, 53, 47, 42, 32, 20],
                backgroundColor: [
                    '#4F6F52',
                    '#739072',
                    '#86A789',
                    '#D2E3C8',
                    '#5F8670',
                    '#C3E2C2',
                    '#EAECCC',
                    '#527853',
                    '#5F6F52',
                    '#A9B388',
                    '#C7DCA7',
                    '#9FBB73'
                ],
                borderColor: [
                    '#405D42',
                    '#5A7E5E',
                    '#6E9470',
                    '#B9D0B2',
                    '#4B725C',
                    '#A9D9AC',
                    '#D6D4B3',
                    '#3E5B42',
                    '#4B5D42',
                    '#92A273',
                    '#ADC491',
                    '#879A5E'
                ],

                borderWidth: 1
            },
            {
                label: 'Gebruik Zonnenpanelen KWH',
                data: [53, 57, 49, 59, 37, 30, 26, 33, 49, 50, 57, 67],
                backgroundColor: [
                    '#DBAFA0',
                    '#BB8493',
                    '#704264',
                    '#49243E',
                    '#DBAFA0',
                    '#BB8493',
                    '#704264',
                    '#49243E',
                    '#DBAFA0',
                    '#BB8493',
                    '#704264',
                    '#49243E'
                ],
                borderColor: [
                    '#DBAFA0',
                    '#BB8493',
                    '#704264',
                    '#49243E',
                    '#DBAFA0',
                    '#BB8493',
                    '#704264',
                    '#49243E',
                    '#DBAFA0',
                    '#BB8493',
                    '#704264',
                    '#49243E'
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

// dashboard 3 giorgina temp// 
$(document).ready(function () {
    console.log('test');
    $("#slider").roundSlider({
        sliderType: "min-range",
        circleShape: "pie",
        startAngle: "315",
        lineCap: "round",
        radius: 120,
        width: 32,
        min: 16,
        max: 32,
        svgMode: true,
        handleSize: "+8",
        pathColor: "#e3e4ed",
        borderWidth: 0,
        editableTooltip: false,
        startValue: 0,
        rangeColor: "#97E3FE"
    })
});