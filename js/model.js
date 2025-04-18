const input = document.getElementById("bdekhosearchtext");
const language = document.getElementById("selectLang");

input.addEventListener("focus", () => {
    input.classList.add("fullview");
    document.querySelector(".typeHeadContainer").style.display = "block";
});

language.addEventListener("click", ()=>{
    document.querySelector(".langDropDown").style.display = "block";
});

document.querySelectorAll(".mainNav").forEach(button => {
    button.addEventListener("click", () => {
      const submenu = button.nextElementSibling;
      submenu.classList.toggle("show");
    });
});