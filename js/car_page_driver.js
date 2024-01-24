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

document.addEventListener('DOMContentLoaded', (event) => {
    const cancelSpotButton = document.getElementById('cancelSpotButton');
    const cancelPopupOverlay = document.getElementById('cancelPopupOverlay');
    const yesButton = document.querySelector('.popup-button.yes'); // Modify selector if needed
    const noButton = document.querySelector('.popup-button.no'); // Modify selector if needed

    // Function to toggle the popup
    function toggleCancelPopup(display) {
        cancelPopupOverlay.style.display = display;
    }

    // Event listeners for the 'Cancel Trip' button
    cancelSpotButton.addEventListener('click', () => toggleCancelPopup('flex'));

    // Event listeners for the 'Yes' and 'No' buttons in the cancellation popup
    yesButton.addEventListener('click', () => {
        // Add your logic here for what happens when the user confirms cancellation
        toggleCancelPopup('none');
    });
    noButton.addEventListener('click', () => toggleCancelPopup('none'));

    // Hide popup when clicking outside of it
    cancelPopupOverlay.addEventListener('click', function(event) {
        if (event.target === cancelPopupOverlay) {
            toggleCancelPopup('none');
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Assume you have a button to trigger the confirmation popup
    const confirmSpotButton = document.getElementById('confirmSpotButton');
    const confirmationPopupOverlay = document.getElementById('confirmationPopupOverlay');
    const yesButton = confirmationPopupOverlay.querySelector('.popup-button.yes'); // Modify selector if needed
    const noButton = confirmationPopupOverlay.querySelector('.popup-button.no'); // Modify selector if needed

    // Function to toggle the confirmation popup
    function toggleConfirmationPopup(display) {
        confirmationPopupOverlay.style.display = display;
    }

    // Event listeners for the button that triggers the confirmation popup
    confirmSpotButton.addEventListener('click', () => toggleConfirmationPopup('flex'));

    // Event listeners for the 'Yes' and 'No' buttons in the confirmation popup
    yesButton.addEventListener('click', () => {
        // Logic when 'Yes' is clicked
        toggleConfirmationPopup('none');
    });
    noButton.addEventListener('click', () => {
        // Logic when 'No' is clicked
        toggleConfirmationPopup('none');
    });

    // Hide the popup when clicking outside of it
    confirmationPopupOverlay.addEventListener('click', function(event) {
        if (event.target === confirmationPopupOverlay) {
            toggleConfirmationPopup('none');
        }
    });
});
