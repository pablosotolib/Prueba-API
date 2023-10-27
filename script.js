

document.addEventListener('DOMContentLoaded', function () {
    const sendButton = document.getElementById('sendButton');
    const jsonInput = document.getElementById('jsonInput');
    const responseOutput = document.getElementById('responseOutput');

    sendButton.addEventListener('click', function () {
        const jsonData = jsonInput.value;

        // Realiza una solicitud POST a la API utilizando Axios
        axios.post('https://catouml.onrender.com/api/modelTransformation/CAtoUML', jsonData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            // Maneja la respuesta exitosa
            responseOutput.textContent = JSON.stringify(response.data, null, 2);
        })
        .catch(error => {
            console.error('Error:', error);

            if (error.response) {
                // Si la respuesta del error tiene datos en formato JSON, puedes acceder a ellos
                responseOutput.textContent = JSON.stringify(error.response.data, null, 2);
            } else {
                // Si no hay datos JSON en la respuesta de error, puedes manejarlo de otra manera
                responseOutput.textContent = 'Error al enviar la solicitud a la API.';
            }
        });
    });
});