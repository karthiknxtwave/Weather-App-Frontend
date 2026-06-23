const loadingMessage = document.querySelector(".loading-message");
const errorMessage = document.querySelector(".error-message");

function showLoading() {
    loadingMessage.classList.remove("hidden");
}

function hideLoading() {
    loadingMessage.classList.add("hidden");
}

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove("hidden");
}

function hideError() {
    errorMessage.textContent = "";
    errorMessage.classList.add("hidden");
}

const cityName = document.querySelector(".city-name");
const weatherDate = document.querySelector(".weather-date");

const temperatureDisplay =
    document.querySelector(".temperature-display");

const conditionIcon =
    document.querySelector(".condition-icon");

const conditionLabel =
    document.querySelector(".condition-label");

const humidityValue =
    document.querySelector(".humidity-value");

const windValue =
    document.querySelector(".wind-value");

const pressureValue =
    document.querySelector(".pressure-value");

    function formatDate() {
        return new Date().toLocaleDateString(
            undefined,
            {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
            }
        );
    }

    function renderCurrentWeather(location, weather) {

        const current = weather.current;
    
        cityName.textContent = `${location.name}, ${location.country}`;
    
        weatherDate.textContent = formatDate();
    
        temperatureDisplay.textContent =
            `${Math.round(current.temperature_2m)}°C`;

        temperatureDisplay.classList.remove(
            "hot",
            "mild",
            "cold"
        );

        temperatureDisplay.classList.add(
            getTemperatureAccent(
                current.temperature_2m
            )
        );
    
        conditionLabel.textContent =
            getWeatherLabel(current.weather_code);
    
        conditionIcon.textContent =
            getWeatherIcon(current.weather_code);
    
        humidityValue.textContent =
            `${current.relative_humidity_2m}%`;
    
        windValue.textContent =
            `${current.wind_speed_10m} km/h`;
    
        pressureValue.textContent =
            `${current.surface_pressure} hPa`;
    
    }