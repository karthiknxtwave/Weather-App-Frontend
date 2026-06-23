const CITY_KEY = "weather-city";

function saveCity(city) {
    localStorage.setItem(
        CITY_KEY,
        city
    );
}

function getSavedCity() {
    return localStorage.getItem(
        CITY_KEY
    );
}

function clearSavedCity() {
    localStorage.removeItem(
        CITY_KEY
    );
}