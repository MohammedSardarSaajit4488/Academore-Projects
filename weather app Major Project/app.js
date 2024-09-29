let id = '9505fd1df737e20152fbd78cdb289b6a';
let weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + id;
let forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?units=metric&appid=' + id;

let city = document.querySelector('.name');
let form = document.querySelector("form");
let temperature = document.querySelector('.temperature');
let description = document.querySelector('.description');
let valueSearch = document.getElementById('name');
let clouds = document.getElementById('clouds');
let humidity = document.getElementById('humidity');
let wind = document.getElementById('wind');
let datetime = document.querySelector('.datetime');
let main = document.querySelector('main');

let temperatureChart, humidityChart;
let temperatureBox = document.getElementById('temperatureBox');
let humidityBox = document.getElementById('humidityBox');
let tempButton = document.getElementById('tempButton');
let humidityButton = document.getElementById('humidityButton');

form.addEventListener("submit", (e) => {
    e.preventDefault();  
    if(valueSearch.value != ''){
        searchWeather(valueSearch.value);
    }
});

tempButton.addEventListener('click', () => {
    temperatureBox.style.display = temperatureBox.style.display === 'none' ? 'block' : 'none';
});

humidityButton.addEventListener('click', () => {
    humidityBox.style.display = humidityBox.style.display === 'none' ? 'block' : 'none';
});

const searchWeather = (cityName) => {
    Promise.all([
        fetch(weatherUrl + '&q=' + cityName).then(response => response.json()),
        fetch(forecastUrl + '&q=' + cityName).then(response => response.json())
    ])
    .then(([weatherData, forecastData]) => {
        if(weatherData.cod == 200){
            displayCurrentWeather(weatherData);
            displayForecast(forecastData);
        } else {
            main.classList.add('error');
            setTimeout(() => {
                main.classList.remove('error');
            }, 1000);
        }
        valueSearch.value = '';
    })
    .catch(error => {
        console.error('Error:', error);
        main.classList.add('error');
        setTimeout(() => {
            main.classList.remove('error');
        }, 1000);
    });
}

const displayCurrentWeather = (data) => {
    city.querySelector('figcaption').innerHTML = data.name;
    city.querySelector('img').src = `https://flagsapi.com/${data.sys.country}/shiny/32.png`;
    temperature.querySelector('img').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
    temperature.querySelector('span').innerText = data.main.temp.toFixed(1);
    description.innerText = data.weather[0].description;
    clouds.innerText = data.clouds.all;
    humidity.innerText = data.main.humidity;
    wind.innerText = data.wind.speed.toFixed(1);
    datetime.innerText = new Date(data.dt * 1000).toLocaleString();
}

const displayForecast = (data) => {
    const dailyData = data.list.filter(item => item.dt_txt.includes('12:00:00'));
    const labels = dailyData.map(day => new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' }));
    const temperatures = dailyData.map(day => day.main.temp);
    const humidities = dailyData.map(day => day.main.humidity);

    if (temperatureChart) temperatureChart.destroy();
    if (humidityChart) humidityChart.destroy();

    temperatureChart = new Chart(document.getElementById('temperatureChart'), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Temperature (°C)',
                data: temperatures,
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: '7-Day Temperature Forecast'
                }
            }
        }
    });

    humidityChart = new Chart(document.getElementById('humidityChart'), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Humidity (%)',
                data: humidities,
                borderColor: 'rgb(54, 162, 235)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: '7-Day Humidity Forecast'
                }
            }
        }
    });
}

const getUserLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${id}`)
                    .then(response => response.json())
                    .then(data => {
                        if (data[0] && data[0].name) {
                            searchWeather(data[0].name);
                        } else {
                            searchWeather('Delhi');
                        }
                    })
                    .catch(error => {
                        console.error('Error fetching city name:', error);
                        searchWeather('Delhi');
                    });
            },
            error => {
                console.error('Geolocation error:', error);
                searchWeather('Delhi');
            }
        );
    } else {
        console.log('Geolocation is not supported by this browser.');
        searchWeather('Delhi');
    }
}

getUserLocation();