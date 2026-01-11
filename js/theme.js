

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("themeToggle");
    if (!toggle) return;
    const root = document.documentElement;

    if (localStorage.getItem("theme") === "dark") {
        root.classList.add("dark");
        toggle.checked = true;
    }

    toggle.addEventListener("change", () => {
        const isDark = toggle.checked;
        root.classList.toggle("dark", isDark);
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
});
