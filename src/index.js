const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
  res.send('funcionando');
});

app.get('/route', (req,res) => {
  res.send('new route');
});

app.get('/product', (req,res) => {
  res.json({
    product: 'product 1',
    price: 200
  });
});

app.listen(port, () => {
  console.log(`mi port: ${port}`);
});
