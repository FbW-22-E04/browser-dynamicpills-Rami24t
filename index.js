document.querySelector("main").addEventListener("click", (e) => {
    document
        .querySelectorAll("main aside li")
        .forEach((li) => li.classList.remove("selected"));
    e.target.classList.add("selected");
    document.querySelectorAll("section").forEach((section) => {
        section.firstElementChild.innerText.includes(e.target.innerText) ? section.classList.add("active") : section.classList.remove("active");
    });
});
