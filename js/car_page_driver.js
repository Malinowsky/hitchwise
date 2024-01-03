document.addEventListener('DOMContentLoaded', (event) => {
    const notifySpotButton = document.getElementById('notifySpotButton');
    const contactDriverButton = document.getElementById('contactDriverButton');
    const popupOverlay = document.getElementById('popupOverlay');
    const contactDriverPopup = document.getElementById('contactDriverPopup');
    const okButton = document.getElementById('okButton');
    const closeContactPopup = document.getElementById('closeContactPopup');

    function togglePopup(display, overlay) {
        overlay.style.display = display;
    }

    notifySpotButton.addEventListener('click', () => togglePopup('flex', popupOverlay));
    okButton.addEventListener('click', () => togglePopup('none', popupOverlay));
    contactDriverButton.addEventListener('click', () => togglePopup('flex', contactDriverPopup));
    closeContactPopup.addEventListener('click', () => togglePopup('none', contactDriverPopup));

    // Hide popups when clicking outside of them
    [popupOverlay, contactDriverPopup].forEach(overlay => {
        overlay.addEventListener('click', function(event) {
            if (event.target === overlay) {
                togglePopup('none', overlay);
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Get the button and the popup overlay elements
    const notifySpotButton = document.getElementById('requestSpotButton');
    const popupOverlay = document.getElementById('popupOverlay');
    const okButton = document.getElementById('okButton');

    // Function to show the popup
    function showPopup() {
        popupOverlay.style.display = 'flex';
    }

    // Function to hide the popup
    function hidePopup() {
        popupOverlay.style.display = 'none';
    }

    // Event listener for the 'Request spot' button
    notifySpotButton.addEventListener('click', showPopup);

    // Event listener for the 'Ok' button in the popup
    okButton.addEventListener('click', hidePopup);

    // (Optional) Hide popup when clicking outside of it
    popupOverlay.addEventListener('click', function(event) {
        if (event.target === popupOverlay) {
            hidePopup();
        }
    });
});