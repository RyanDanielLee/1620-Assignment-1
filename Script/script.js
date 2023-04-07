//Dark & Light Theme Toggle
const body = document.body;
const darkModeButton = document.querySelector(".darkModeButton");

darkModeButton.addEventListener('click', () => {
    body.classList.toggle("darkModeTheme");

    if (body.classList.contains("darkModeTheme")) {
        darkModeButton.textContent = "Light Mode";
    }
    else {
        darkModeButton.textContent = "Dark Mode";
    }
});