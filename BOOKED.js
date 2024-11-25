document.getElementById('tourBookingForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const people = document.getElementById('people').value.trim();

    if (!name || !email || !people) {
        alert('Please fill out all the required fields.');
        return;
    }

    alert(`Thank you, ${name}! Your booking for ${people} traveler(s) has been received.`);
    document.getElementById('tourBookingForm').reset();
});

function handleOtherPlaceOption() {
    const places = document.getElementById('places');
    const otherPlaceGroup = document.getElementById('otherPlaceGroup');
    otherPlaceGroup.style.display = places.value.includes('other') ? 'block' : 'none';
}
