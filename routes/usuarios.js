const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { email, usuario, senhaMestra } = req.body;
  // Aqui você pode adicionar a lógica para salvar os dados no banco de dados
  res.status(201).json({ message: 'User registered successfully', usuario, username });
});

module.exports = router;
