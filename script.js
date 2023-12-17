document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const nomInput = document.getElementById('nom');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nomError = document.getElementById('nomError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    contactForm.addEventListener('submit', function (event) {
        console.log('Formulaire soumis.');
        if (!ValidNom(nomInput.value)) {
            event.preventDefault();
            nomError.textContent = 'Veuillez saisir un nom valide (lettres seulement)';
        } else {
            nomError.textContent = '';
        }

        if (!ValidEmail(emailInput.value)) {
            event.preventDefault();
            emailError.textContent = 'Veuillez saisir une adresse e-mail valide';
        } else {
            emailError.textContent = '';
        }

        if (!ValidMessage(messageInput.value)) {
            event.preventDefault();
            messageError.textContent = 'Veuillez saisir un message';
        } else {
            messageError.textContent = '';
        }

        if (isValidForm()) {
            window.location.href = 'index.html';
        }
    });

    function ValidNom(nom) {
        const pattern = /^[A-Za-z]+$/;
        return pattern.test(nom);
    }

    function ValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function ValidMessage(message) {
        return message.trim() !== '';
    }

    function isValidForm() {
        return ValidNom(nomInput.value) && ValidEmail(emailInput.value) && ValidMessage(messageInput.value);
    }
});




