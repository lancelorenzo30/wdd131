const hamBtn = document.querySelector("#menu");
const navigation = document.querySelector("ul");

hamBtn.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamBtn.classList.toggle("open");
})

window.addEventListener("resize", () => {
    if (window.innerWidth >= 640) {
        navigation.classList.remove("open");
        hamBtn.classList.remove("open");
    }
});