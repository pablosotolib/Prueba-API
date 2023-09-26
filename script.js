document.addEventListener('DOMContentLoaded', function () {
    const sendButton = document.getElementById('sendButton');
    const jsonInput = document.getElementById('jsonInput');
    const responseOutput = document.getElementById('responseOutput');

    sendButton.addEventListener('click', function () {
        const jsonData = jsonInput.value;

        // Realiza una solicitud POST a la API
        fetch('https://prueba-mts1.onrender.com/api/modelTransformation/CAtoUML', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonData
        })
        .then(response => response.json())
        .then(data => {
            // Muestra la respuesta de la API en el elemento "responseOutput"
            responseOutput.textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Error:', error);
            responseOutput.textContent = 'Error al enviar la solicitud a la API.';
        });
    });
});