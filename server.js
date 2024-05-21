// app.js

const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Hello World! Thanks your app is deployed. are you happy now?');
});

app.listen(port, () => {
  console.log(` App is running on n http://localhost:${port}`);
});
