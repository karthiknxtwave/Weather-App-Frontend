const body = document.body;
const themeToggle = document.querySelector(".theme-toggle");

const THEME_KEY = "weather-theme";

function applyTheme(theme) {
    body.dataset.theme = theme;

    themeToggle.textContent =
        theme === "dark" ? "🌞" : "🌙";
}

function toggleTheme() {
    const currentTheme = body.dataset.theme || "light";

    const nextTheme =
        currentTheme === "dark"
            ? "light"
            : "dark";

    applyTheme(nextTheme);

    localStorage.setItem(
        THEME_KEY,
        nextTheme
    );
}

function initializeTheme() {
    const savedTheme =
        localStorage.getItem(THEME_KEY) ||
        "light";

    applyTheme(savedTheme);
}

initializeTheme();

themeToggle.addEventListener(
    "click",
    toggleTheme
);