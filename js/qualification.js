const educationButton = document.querySelector('.education_btn');
const workButton = document.querySelector('.work_btn');
const educationSlide = document.querySelector('.education_slide');
const workSlide = document.querySelector('.work_slide');


educationButton.addEventListener('click', showEducationSlide);
workButton.addEventListener('click', showWorkSlide);

function showEducationSlide() {
    educationSlide.style.display = 'flex';
    workSlide.style.display = 'none';
}

function showWorkSlide() {
    educationSlide.style.display = 'none';
    workSlide.style.display = 'flex';
}

showEducationSlide()