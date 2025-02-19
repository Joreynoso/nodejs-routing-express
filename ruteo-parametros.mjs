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

// Ruteo con parametros
// Solicitud http://localhost:3000/user/123
app.get('/user/:id', (req, res) => {
    const userID = req.params.id; // --> id, palabra reservada de express
    res.send(`Perfil de usuario con userID: ${userID}`);
});

// Ruteo con multiples parametros
// Solicitud http://localhost:3000/product/electronics/123
app.get('/product/:category/:id', (req, res) => {
    const { id, category } = req.params;
    res.send(`El producto id: ${id}, corresponde a la catagoria: ${category}`);
});

app.listen(PORT, () => {
    console.log(`Escuchando en http://localhost:${PORT}`);
});
