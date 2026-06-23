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

const forecastList = document.querySelector(".forecast-list");

function getDayName(dateString) {
    return new Date(dateString)
        .toLocaleDateString(
            undefined,
            { weekday: "short" }
        );
}

function renderForecast(weather) {
    forecastList.innerHTML = "";

    const days = weather.daily.time;

    for (let index = 0; index < 5; index++) {
        const dayLabel =
            index === 0
                ? "Today"
                : getDayName(days[index]);

        const weatherCode =
            weather.daily.weather_code[index];

        const maxTemp =
            Math.round(
                weather.daily.temperature_2m_max[index]
            );

        const minTemp =
            Math.round(
                weather.daily.temperature_2m_min[index]
            );

        const card = document.createElement("div");

        card.className =
            index === 0
                ? "forecast-card today"
                : "forecast-card";

        card.innerHTML = `
            <div class="forecast-day">
                ${dayLabel}
            </div>

            <div class="forecast-icon">
                ${getWeatherIcon(weatherCode)}
            </div>

            <div class="forecast-temperatures">
                <span class="forecast-high">
                    ${maxTemp}°
                </span>

                <span class="forecast-low">
                    ${minTemp}°
                </span>
            </div>
        `;

        forecastList.appendChild(card);
    }
}

const hourlyList = document.querySelector(".hourly-list");

function formatHour(dateTimeString) {
    return new Date(dateTimeString)
        .toLocaleTimeString(
            [],
            {
                hour: "2-digit",
                minute: "2-digit",
            }
        );
}

function renderHourlyInsights(weather) {

    hourlyList.innerHTML = "";

    const currentHour =
        new Date().getHours();

    for (
        let index = currentHour;
        index < currentHour + 6;
        index++
    ) {

        const time =
            weather.hourly.time[index];

        const temperature =
            Math.round(
                weather.hourly.temperature_2m[index]
            );

        const weatherCode =
            weather.hourly.weather_code[index];

        const row =
            document.createElement("div");

        row.className = "hourly-item";

        row.innerHTML = `
            <div>
                ${formatHour(time)}
            </div>

            <div>
                ${getWeatherIcon(weatherCode)}
                ${getWeatherLabel(weatherCode)}
            </div>

            <div>
                ${temperature}°
            </div>
        `;

        hourlyList.appendChild(row);
    }
}