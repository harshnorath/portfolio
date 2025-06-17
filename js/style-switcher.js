// toggler style switcher
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click",()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
})
//hide style on scroll
window.addEventListener("scroll",()=>{
    if(document.querySelector(".style-switcher").classList.contains("open"))
        {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
//theme colors
const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternateStyle.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true")
        }
    })
}
// theme light and dark mode
document.addEventListener("DOMContentLoaded", () => {
    const dayNight = document.querySelector(".day-night");
    dayNight.addEventListener("click", () => {
        dayNight.querySelector("i").classList.toggle("fa-moon");
        dayNight.querySelector("i").classList.toggle("fa-sun");
        document.body.classList.toggle("dark");
    });
});

window.addEventListener("load", () => {
    const dayNight = document.querySelector(".day-night");
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
        dayNight.querySelector("i").classList.remove("fa-moon");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
        dayNight.querySelector("i").classList.remove("fa-sun");
    }
});





document.addEventListener("DOMContentLoaded", () => {
    const dayNight = document.querySelector(".day-night");

    // Toggle theme on click
    dayNight.addEventListener("click", () => {
        document.body.classList.toggle("light");

        // Save the theme preference
        localStorage.setItem("theme", document.body.classList.contains("light") ? "dark" : "light");
    });

    // Load saved theme preference
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light");
    }
});
