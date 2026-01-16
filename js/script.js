// ===============================
// NAVBAR ACTIVE LINK (AUTO)
// ===============================
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});

// ===============================
// PAGE LOAD ANIMATION
// ===============================
window.addEventListener("load", () => {
    const main = document.querySelector("main");
    if (main) {
        main.classList.add("show");
    }
});
