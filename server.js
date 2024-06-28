const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

// Middleware CORS
app.use(cors());

// Middleware para processar JSON
app.use(express.json());

// Rotas
const usuariosRoutes = require('./routes/usuarios');
app.use('/api/usuarios', usuariosRoutes);

app.listen(port, () => {
  console.log(`Server running at http://172.28.0.1:${port}`);
});
