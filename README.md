# Weather Forecast App

## Overview

The **Weather Forecast App** is a simple web application that allows users to search for current weather conditions and a 7-day forecast for any city around the world. The app fetches real-time data from the OpenWeather API and displays it with intuitive visualizations, including temperature and humidity charts.

## Features
- **Current Weather Data**: Get up-to-date weather information including temperature, cloud coverage, humidity, wind speed, and a description of the weather.
- **7-Day Forecast**: View a 7-day forecast for temperature and humidity, displayed in interactive graphs.
- **Geolocation Support**: Automatically detect the user’s location and provide weather information based on current geographical coordinates.
- **Responsive Design**: Mobile-friendly layout that adjusts seamlessly across different screen sizes.

## Technologies Used
- **HTML5**: Structure and layout of the application.
- **CSS3**: Custom styles for layout, fonts, and responsiveness.
- **JavaScript (ES6+)**: Fetching data from the OpenWeather API, DOM manipulation, and event handling.
- **OpenWeather API**: Provides real-time weather data and forecasts.
- **Chart.js**: Renders interactive temperature and humidity charts.
- **Font Awesome**: Used for icons like search, temperature, and humidity.

## Files Structure
- `index.html`: The main HTML file that sets up the structure of the app interface.
- `style.css`: The stylesheet containing all custom styles for the app’s layout, form, weather display, and charts.
- `app.js`: Contains the logic for interacting with the OpenWeather API, updating the UI with weather data, and managing user input and geolocation.

## How It Works
1. **User Search**: Enter a city name in the search bar and click the search button to get weather details.
2. **Automatic Location**: On page load, the app will try to fetch your location and display weather information for your current city.
3. **Current Weather Display**: The app shows key weather details such as temperature, humidity, wind speed, and a weather icon.
4. **Forecast Charts**: You can view temperature and humidity forecasts for the next 7 days in an easy-to-read line chart.
5. **Error Handling**: If the city is not found, an error message will be displayed.

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/weather-forecast-app.git
   cd weather-forecast-app
   
Here's the complete code for your README.md file. You can directly copy and paste it into your repository:

markdown
Copy code
# Weather Forecast App

## Overview

The **Weather Forecast App** is a simple web application that allows users to search for current weather conditions and a 7-day forecast for any city around the world. The app fetches real-time data from the OpenWeather API and displays it with intuitive visualizations, including temperature and humidity charts.

## Features
- **Current Weather Data**: Get up-to-date weather information including temperature, cloud coverage, humidity, wind speed, and a description of the weather.
- **7-Day Forecast**: View a 7-day forecast for temperature and humidity, displayed in interactive graphs.
- **Geolocation Support**: Automatically detect the user’s location and provide weather information based on current geographical coordinates.
- **Responsive Design**: Mobile-friendly layout that adjusts seamlessly across different screen sizes.

## Technologies Used
- **HTML5**: Structure and layout of the application.
- **CSS3**: Custom styles for layout, fonts, and responsiveness.
- **JavaScript (ES6+)**: Fetching data from the OpenWeather API, DOM manipulation, and event handling.
- **OpenWeather API**: Provides real-time weather data and forecasts.
- **Chart.js**: Renders interactive temperature and humidity charts.
- **Font Awesome**: Used for icons like search, temperature, and humidity.

## Files Structure
- `index.html`: The main HTML file that sets up the structure of the app interface.
- `style.css`: The stylesheet containing all custom styles for the app’s layout, form, weather display, and charts.
- `app.js`: Contains the logic for interacting with the OpenWeather API, updating the UI with weather data, and managing user input and geolocation.

## How It Works
1. **User Search**: Enter a city name in the search bar and click the search button to get weather details.
2. **Automatic Location**: On page load, the app will try to fetch your location and display weather information for your current city.
3. **Current Weather Display**: The app shows key weather details such as temperature, humidity, wind speed, and a weather icon.
4. **Forecast Charts**: You can view temperature and humidity forecasts for the next 7 days in an easy-to-read line chart.
5. **Error Handling**: If the city is not found, an error message will be displayed.

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/weather-forecast-app.git
   cd weather-forecast-app
2. Open index.html You can simply open the index.html file in your browser to start using the app.

3. API Key: To use this app, you need to add your OpenWeather API key in the app.js file:
   let id = 'YOUR_API_KEY_HERE';
   
5. Dependencies: The app uses external libraries like Chart.js and Font Awesome, which are already linked via CDN in the index.html file:
   <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.0/chart.min.js"></script>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
   
5.Future Enhancements
Hourly Forecasts: Add detailed hourly forecasts for more granular weather insights.
Dark Mode: Include a toggle for dark mode to enhance user experience at night.
Multilingual Support: Implement support for multiple languages.

License
This project is licensed under the MIT License.
