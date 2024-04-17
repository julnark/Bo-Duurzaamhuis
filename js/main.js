//Grafiek Voor Energie Verbruik
document.addEventListener('DOMContentLoaded', function Energie() {
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
document.addEventListener('DOMContentLoaded', function () {
    const Zonnepanelenctx = document.getElementById('ZonnepanelenChart');
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

    //Weersverwachting Julnar
    const container = document.querySelector('.boards.boards-weer');
    const search = document.querySelector('.search-box__button');
    const weatherBox = document.querySelector('.weather-box');
    const weatherDetails = document.querySelector('.weather-details');
    const error404 = document.querySelector('.not-found');
    const cityHide = document.querySelector('.city-hide');

    search.addEventListener('click', () => {
        const APIKey = 'bbd65ae61d254bacb7b1e3c5d280cdd5';
        const city = document.querySelector('.search-box input').value;
        if (city == '')
            return;

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
            .then(response => response.json()).then(json => {

                if (json.cood == '404') {
                    cityHide.textContent = city;
                    container.computedStyleMap.height = '400px';
                    weatherBox.classList.add('active');
                    weatherDetails.classList.add('active');
                    error404.classList.add('active');

                    return;
                }

                const image = document.querySelector('.weather-box img');
                const temperature = document.querySelector('.weather-box .temperature');
                const description = document.querySelector('.weather-box .description');
                const humidity = document.querySelector('.weather-details .humidity span');
                const wind = document.querySelector('.weather-details .wind span');

                if (city.textContent == city) {
                    return;
                } else {
                    cityHide.textContent = city;

                    container.computedStyleMap.height = '555px';
                    weatherBox.classList.add('active');
                    weatherDetails.classList.add('active');
                    error404.classList.remove('active');
                    container.classList.add('active');

                    setTimeout(() => {
                        container.classList.remove('active');
                    }, 2500);

                    switch (json.weather[0].main) {
                        case 'Clear':
                            image.src = 'img/clear.png'
                            break;
                        case 'Rain':
                            image.src = 'img/rain.png'
                            break;
                        case 'Snow':
                            image.src = 'img/snow.png'
                            break;
                        case 'Cloauds':
                            image.src = 'img/cloud.png'
                            break;
                        case 'Mist':
                            image.src = 'img/mist.png'
                            break;
                        case 'Haze':
                            image.src = 'img/mist.png'
                            break;
                        default:
                            image.src = 'img/cloud.png';

                            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
                            description.innerHTML = `${json.weather[0].description}`;
                            humidity.innerHTML = `${json.main.humidity}%`;
                            wind.innerHTML = `${parseInt(json.wind.speed)}KM/H`;

                            const infoWeather = document.querySelector('.info-weather');
                            const infoHumidity = document.querySelector('.info-humidity');
                            const infoWind = document.querySelector('.info-wind');

                            const elCloneinfoWeather = infoWeather.cloneNode(true);
                            const elCloneinfohumidity = infoHumidity.cloneNode(true);
                            const elCloneinfoWind = infoWind.cloneNode(true);

                            elCloneinfoWeather.id = 'clone-info-weather';
                            elCloneinfoWeather.classList.add('active-clone');

                            elCloneinfohumidity.id = 'clone-info-humidity';
                            elCloneinfohumidity.classList.add('active-clone');

                            elCloneinfoWind.id = 'clone-info-wind';
                            elCloneinfoWind.classList.add('active-clone');

                            setTimeout(() => {
                                infoWeather.insertAdjacentElement("afterend", elCloneinfoWeather)
                                infoHumidity.insertAdjacentElement("afterend", elCloneinfohumidity)
                                infoWind.insertAdjacentElement("afterend", elCloneinfoWind)

                            }, 2200)

                            const cloneInfoWeather = document.querySelector('.info-waether.active-clone');
                            const totalcloneInfoWeather = cloneInfoWeather.length;
                            const cloneinfoWeatherFirst = cloneInfoWeather[0]

                            const cloneInfoHumidity = document.querySelector('.info-humidity.active-clone');
                            const totalcloneInfoHumidity = cloneInfoHumidity.length;
                            const cloneinfoHumidityFirst = cloneInfoHumidity[0]

                            const cloneInfoWind = document.querySelector('.info-wind.active-clone');
                            const totalcloneInfoWind = cloneInfoWeather.length;
                            const cloneinfoWindFirst = cloneInfoWind[0]

                            if (totalcloneInfoWeather > 0) {
                                cloneinfoWeatherFirst.classList.remove('active-clone')
                                cloneinfoHumidityFirst.classList.remove('active-clone')
                                cloneinfoWindFirst.classList.remove('active-clone')

                                setTimeout(() => {
                                    cloneinfoWeatherFirst.remove();
                                    cloneinfoHumidityFirst.remove();
                                    cloneinfoWindFirst.remove();

                                }, 2200)
                            }
                    }
                }
            })
    })
});
