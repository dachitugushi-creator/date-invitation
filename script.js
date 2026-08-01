function next(page) {
    document.querySelectorAll("section").forEach(section => {
        section.classList.add("hidden");
    });

    document.getElementById(page).classList.remove("hidden");
}


// убегающая кнопка "Нет"
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {

    const x = Math.random() * 250 - 125;
    const y = Math.random() * 150 - 75;

    noBtn.style.transform =
        `translate(${x}px, ${y}px)`;
});
