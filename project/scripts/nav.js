document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const nav = document.getElementById("nav-menu");

    if (window.innerWidth <= 768) {
        const menuBtn = document.createElement("button");
        menuBtn.className = "menu-toggle";
        menuBtn.innerHTML = "&#9776;";
        header.insertBefore(menuBtn, nav);

        menuBtn.addEventListener("click", () => {
            nav.classList.toggle("active");

            if (nav.classList.contains("active")) {
                menuBtn.innerHTML = "&times;";
            } else {
                menuBtn.innerHTML = "&#9776;";
            }
        });
    }
});