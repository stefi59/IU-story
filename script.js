function setLanguage(lang) {
    document.querySelectorAll("[data-ro]").forEach(element => {
        element.textContent = element.getAttribute("data-" + lang);
    });
}
