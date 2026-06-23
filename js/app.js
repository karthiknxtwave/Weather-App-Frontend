const searchForm = document.querySelector(".search-form");
const cityInput = document.querySelector(".city-input");

async function handleSearch(event) {
    event.preventDefault();

    const city = cityInput.value.trim();

    if (!city) {
        return;
    }

    hideError();
    showLoading();

    try {
        const location = await searchCity(city);

        const weather = await getWeather(
            location.latitude,
            location.longitude
        );

        renderCurrentWeather(location,weather);
        renderForecast(weather);
        renderHourlyInsights(weather);
    } catch (error) {
        showError(error.message);
    } finally {
        hideLoading();
    }
    cityInput.value = "";
}


searchForm.addEventListener(
    "submit",
    handleSearch
);

