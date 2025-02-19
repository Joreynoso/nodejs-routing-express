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

// Consulta con parametros
// Solicitud http://localhost:3000/profile?edad=33
app.get('/profile', (req, res) => {
    const edad = req.query.edad; // --> parametro requerido
    console.log(`Edad recibida: ${edad}`);
    res.send(`Edad del usuario: ${edad}`);
});

app.listen(PORT, () => {
    console.log(`Escuchando en http://localhost:${PORT}`);
});