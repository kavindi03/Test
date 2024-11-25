// Smooth scrolling to sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    } else {
        console.error(`Section with ID "${sectionId}" not found.`);
    }
}

// Handle form submissions
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const feedbackForm = document.getElementById("feedback-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form from refreshing the page
            const successMessage = document.getElementById("contact-success");
            if (successMessage) {
                successMessage.classList.remove("hidden");
            } else {
                console.error("Contact success message element not found.");
            }
        });
    } else {
        console.warn("Contact form not found on this page.");
    }

    if (feedbackForm) {
        feedbackForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const successMessage = document.getElementById("feedback-success");
            if (successMessage) {
                successMessage.classList.remove("hidden");
            } else {
                console.error("Feedback success message element not found.");
            }
        });
    } else {
        console.warn("Feedback form not found on this page.");
    }
});

// Photo carousel for the Services section
document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "SERVICEPHOTO/hotel.jpg",
        "SERVICEPHOTO/food.jpg",
        "SERVICEPHOTO/guide.jpg",
        "SERVICEPHOTO/nature.jpg",
        "SERVICEPHOTO/heritage.jpg",
    ];
    let currentImageIndex = 0;

    const carouselImage = document.getElementById("carousel-image");

    if (carouselImage) {
        function updateCarousel() {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            carouselImage.src = images[currentImageIndex];
        }

        // Change carousel image every 3 seconds
        setInterval(updateCarousel, 3000);
    } else {
        console.warn("Carousel image element not found.");
    }
});
