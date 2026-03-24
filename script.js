const themeButton = document.querySelector(".theme-button i");


if(localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    themeButton.classList.replace('uil-moon', "uil-sun");
} else {
    themeButton.classList.replace("uil-sun", "uil-moon");
}
themeButton.addEventListener("click", () => {
    const isDarkMode = document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
    themeButton.classList.toggle("uil-sun", isDarkMode);
    themeButton.classList.toggle("uil-moon", !isDarkMode);
});