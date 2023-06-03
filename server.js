const express = require('express');
const app = express();

app.get('index.html', (req, res) => {
  res.send('Hello, world!');
});

const port = 3000;

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

app.use(express.static('public'));
