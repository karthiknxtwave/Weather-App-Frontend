function getWeatherLabel(code) {
    const labels = {
        0: "Clear Sky",
        1: "Mainly Clear",
        2: "Partly Cloudy",
        3: "Overcast",

        45: "Fog",
        48: "Fog",

        51: "Light Drizzle",
        53: "Drizzle",
        55: "Heavy Drizzle",

        61: "Light Rain",
        63: "Rain",
        65: "Heavy Rain",

        71: "Light Snow",
        73: "Snow",
        75: "Heavy Snow",

        95: "Thunderstorm"
    };

    return labels[code] || "Unknown";
}

function getWeatherIcon(code) {

    if (code === 0) return "☀️";

    if (code <= 3) return "⛅";

    if (code >= 45 && code <= 48) return "🌫️";

    if (code >= 51 && code <= 65) return "🌧️";

    if (code >= 71 && code <= 75) return "❄️";

    if (code === 95) return "⛈️";

    return "🌤️";
}

function getTemperatureAccent(temp) {

    if (temp <= 10) {
        return "cold";
    }

    if (temp >= 30) {
        return "hot";
    }

    return "mild";
}