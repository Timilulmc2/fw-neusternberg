// Einfache Formularvalidierung
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Vielen Dank für Ihre Nachricht!');
        document.getElementById('contact-form').reset();
    } else {
        alert('Bitte füllen Sie alle Felder aus.');
    }
});
