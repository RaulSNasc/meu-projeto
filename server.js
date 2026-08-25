const express = require('express');
const connectRoutes = require('./routes/connectRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api', connectRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});