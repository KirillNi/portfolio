let russianButton = document.querySelector('.button_rus_lang');
let englishButton = document.querySelector('.button_en_lang');
let russianText = document.querySelectorAll('.rus_lang');
let englishText = document.querySelectorAll('.en_lang');

if (sessionStorage.getItem("language") === "rus") {
    showRussian();
} else {
    showEnglish();
}

russianButton.addEventListener('click', showRussian);
englishButton.addEventListener('click', showEnglish);

function showRussian() {
    russianText.forEach((el) => el.style.display = 'flex');
    englishText.forEach((el) => el.style.display = 'none');
    russianButton.style.display = 'none';
    englishButton.style.display = 'flex';
    sessionStorage.setItem("language", "rus");
}

function showEnglish() {
    russianText.forEach((el) => el.style.display = 'none');
    englishText.forEach((el) => el.style.display = 'flex');
    russianButton.style.display = 'flex';
    englishButton.style.display = 'none';
    sessionStorage.setItem("language", "en");
}

// showEnglish()
