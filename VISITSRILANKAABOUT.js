

// Add 'clicked' effect on images
document.querySelectorAll('.images img').forEach(img => {
    img.addEventListener('click', () => {
        img.classList.toggle('clicked'); // Toggle the 'clicked' class for scaling/rotating effect
    });
});


// Add 'clicked' style in CSS
const style = document.createElement('style');
style.innerHTML = `
    .images img.clicked {
        transform: scale(1.3) rotate(5deg);
        transition: transform 0.3s ease-in-out;
    }
`;
document.head.appendChild(style);
