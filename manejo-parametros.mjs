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

// Ruteo con parametro especifico
// Solicitud http://localhost:3000/user/123
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    console.log(`Usuario recibido id: ${userId}`);
    res.send(`Perfil del usuario id: ${userId}`);
});

app.listen(PORT, () => {
    console.log(`Escuchando en http://localhost:${PORT}`);
});