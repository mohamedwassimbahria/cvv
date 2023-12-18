document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const nomInput = document.getElementById('nom');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nomError = document.getElementById('nomError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const successMessage = document.getElementById('successMessage'); // Add this line

    contactForm.addEventListener('submit', function (event) {
        console.log('Formulaire soumis.');

        // Validation logic
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

        // Check if all fields are valid before showing success message
        if (ValidNom(nomInput.value) && ValidEmail(emailInput.value) && ValidMessage(messageInput.value)) {
            console.log('Success message:', successMessage.textContent);
            successMessage.textContent = 'Votre formulaire a été soumis avec succès!';
            setTimeout(function () {
                window.location.href = "index.html";
            }, 2000);
        } else {
            successMessage.textContent = '';
        }

        console.log('Nom:', nomInput.value);
        console.log('Email:', emailInput.value);
        console.log('Message:', messageInput.value);

        console.log('Validation du nom:', ValidNom(nomInput.value));
        console.log('Validation de l\'e-mail:', ValidEmail(emailInput.value));
        console.log('Validation du message:', ValidMessage(messageInput.value));
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
