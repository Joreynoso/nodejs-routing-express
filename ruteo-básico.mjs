// --> Importar express
import express from 'express';

// --> Crear instancia de express
const app = express();

// Configurar el puerto en el que el servidor escuchará
const PORT = 3000;

// Ruteo get para el Home
// Solicitud http://localhost:3000/
app.get('/', (req, res) => {
    res.send(`Página de inicio!`);
});

// Ruta get para obtener datos simples
// Solicitud htto://localhost:3000/data
app.get('/data', (req, res) => {
    console.log(`Datos recibidos`);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`El servidor se está ejecutando en http:localhost:${PORT}`);
});
