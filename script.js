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

        const isNomValid = ValidNom(nomInput.value);
        if (!isNomValid) {
            event.preventDefault();
            nomError.textContent = 'Veuillez saisir un nom valide (lettres seulement)';
        } else {
            nomError.textContent = '';
        }

        // Validation du champ de saisie de l'e-mail
        const isEmailValid = ValidEmail(emailInput.value);
        if (!isEmailValid) {
            event.preventDefault();
            emailError.textContent = 'Veuillez saisir une adresse e-mail valide';
        } else {
            emailError.textContent = '';
        }

        // Validation du champ de saisie du message
        const isMessageValid = ValidMessage(messageInput.value);
        if (!isMessageValid) {
            event.preventDefault();
            messageError.textContent = 'Veuillez saisir un message';
        } else {
            messageError.textContent = '';
        }

        if (isNomValid && isEmailValid && isMessageValid) {
            window.location.href = 'index.html';
        }

        console.log('Nom:', nomInput.value);
        console.log('Email:', emailInput.value);
        console.log('Message:', messageInput.value);

        console.log('Validation du nom:', isNomValid);
        console.log('Validation de l\'e-mail:', isEmailValid);
        console.log('Validation du message:', isMessageValid);
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
});
