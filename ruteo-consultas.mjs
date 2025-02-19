import express from 'express';

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`Página inicio`);
});

// Ruteo con consultas
// Solicitud http://localhost:3000/search?q=javascript
app.get('/search', (req, res) => {
    const query = req.query.q;
    res.send(`Resultado de la busqueda para: ${query}`);
});

app.listen(PORT, () => {
    console.log(`Èscuchando servidor en http://localhost:${PORT}`);
});

// Ruteo con multiples parametros de consulta
// Solicitud http://localhost:3000/filter?type=book&minPrice=10&maxPrice=150
app.get('/filter', (req, res) => {
    const { type, minPrice, maxPrice } = req.query;
    res.send(`filtrar por tipo: ${type},rango de precios: ${minPrice} y ${maxPrice}`);
});





