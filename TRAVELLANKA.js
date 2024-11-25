let currentSlide = 0;
const videoSlides = document.querySelectorAll(".video-slide");
const contentSlides = document.querySelectorAll(".content");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

// Function to show a specific slide
function showSlide(index) {
    videoSlides[currentSlide].classList.remove("active");
    contentSlides[currentSlide].classList.remove("active");

    currentSlide = (index + videoSlides.length) % videoSlides.length;

    videoSlides[currentSlide].classList.add("active");
    contentSlides[currentSlide].classList.add("active");
}

// Event Listeners for Swipe Buttons
prevBtn.addEventListener("click", () => {
    showSlide(currentSlide - 1);
});

nextBtn.addEventListener("click", () => {
    showSlide(currentSlide + 1);
});


// Read More Button Click
readMoreBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const targetSectionId = btn.getAttribute("data-target");
        const targetSection = document.getElementById(targetSectionId);

        targetSection.classList.add("active");
        window.scrollTo({ top: targetSection.offsetTop - 60, behavior: 'smooth' });
    });
});

// Back Button Click
backBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const targetSection = btn.closest(".extra-section");
        targetSection.classList.remove("active");
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
