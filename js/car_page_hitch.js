document.addEventListener('DOMContentLoaded', (event) => {
    // Get the button and the popup overlay elements
    const requestSpotButton = document.getElementById('requestSpotButton');
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
    requestSpotButton.addEventListener('click', showPopup);

    // Event listener for the 'Ok' button in the popup
    okButton.addEventListener('click', hidePopup);

    // (Optional) Hide popup when clicking outside of it
    popupOverlay.addEventListener('click', function(event) {
        if (event.target === popupOverlay) {
            hidePopup();
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const requestSpotButton = document.getElementById('requestSpotButton');
    const contactDriverButton = document.getElementById('contactDriverButton');
    const popupOverlay = document.getElementById('popupOverlay');
    const contactDriverPopup = document.getElementById('contactDriverPopup');
    const closeContactPopup = document.getElementById('closeContactPopup');

    function showRequestPopup() {
        popupOverlay.style.display = 'flex';
    }

    function hideRequestPopup() {
        popupOverlay.style.display = 'none';
    }

    function showContactPopup() {
        contactDriverPopup.style.display = 'flex';
    }

    function hideContactPopup() {
        contactDriverPopup.style.display = 'none';
    }

    requestSpotButton.addEventListener('click', showRequestPopup);
    contactDriverButton.addEventListener('click', showContactPopup);
    closeContactPopup.addEventListener('click', hideContactPopup);

    // Hide popups when clicking outside of them
    [popupOverlay, contactDriverPopup].forEach(overlay => {
        overlay.addEventListener('click', function(event) {
            if (event.target === overlay) {
                overlay.style.display = 'none';
            }
        });
    });
});