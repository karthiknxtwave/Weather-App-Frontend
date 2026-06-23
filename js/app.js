const searchForm = document.querySelector(".search-form");
const cityInput = document.querySelector(".city-input");

async function handleSearch(event) {
    event.preventDefault();

    const city =
        cityInput.value.trim();

    if (!city) {
        return;
    }

    
    await loadWeather(city);
}

async function loadWeather(city) {
    hideError();
    showLoading();
    
    try {
        const location = await searchCity(city);

        saveCity(city);
        const weather = await getWeather(location.latitude, location.longitude);

        renderCurrentWeather(
            location,
            weather
        );

        renderForecast(weather);

        renderHourlyInsights(weather);

    } catch (error) {
        showError(error.message);
    } finally {
        hideLoading();
    }
}


searchForm.addEventListener(
    "submit",
    handleSearch
);

const savedCity = getSavedCity();

if (savedCity) {
    loadWeather(savedCity);
}

const clearButton =
    document.querySelector(
        ".clear-city-btn"
    );

function handleClearCity() {

    clearSavedCity();

    cityInput.value = "";

    resetUI();
}

clearButton.addEventListener(
    "click",
    handleClearCity
);