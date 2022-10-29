const express = require('express');
const routerApi = require('./router/index.js')

const app = express();
const port = 3000;

app.use(express.json())

app.get('/', (req,res) => {
  res.send('my fisrt server');
});

app.get('/route', (req,res) => {
  res.send('new route');
});

routerApi(app);


app.listen(port, () => {
  console.log(`mi port: ${port}`);
});
