document.addEventListener('DOMContentLoaded', function () {
    var loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        console.log('Logowanie', email, password);
    });
});

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Form submitted!');
});

document.querySelectorAll('#checklist input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', function () {
        alert('You selected: ' + this.value);
    });
});