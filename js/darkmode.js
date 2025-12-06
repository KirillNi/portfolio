let checkbox = document.getElementById("ChangeTheme");
let lightTheme = document.querySelectorAll(".lightTheme");

if (sessionStorage.getItem("mode") === "dark") {
    darkmode();
} else {
    nodark();
}

checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
        darkmode();
    } else {
        nodark();
    }
});

function darkmode() {
    document.body.classList.add("dark-mode"); //add a class to the body tag
    lightTheme.forEach((el) => el.classList.add("dark-mode"));
    // lightTheme.classList.add("dark-mode");
    checkbox.checked = true; //set checkbox to be checked state
    sessionStorage.setItem("mode", "dark"); //store a name & value to know that dark mode is on
}

function nodark() {
    document.body.classList.remove("dark-mode"); //remove added class from body tag
    lightTheme.forEach((el) => el.classList.remove("dark-mode"));
    checkbox.checked = false; //set checkbox to be unchecked state
    sessionStorage.setItem("mode", "light"); //store a name & value to know that dark mode is off or light mode is on
}
