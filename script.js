document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Hier kannst du den E-Mail-Versand mit einem Backend-Service durchführen
    // Zum Beispiel mit einem Python-Skript auf dem Server

    // Zeige die Bestätigungsmeldung an
    document.getElementById('confirmation').classList.remove('hidden');
});
