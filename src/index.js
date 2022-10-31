const express = require('express');
const routerApi = require('./router/index.js')
const { errorHandler, boomErrorHandler } = require('./midlleware/errorHandler');

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

app.use(boomErrorHandler);
app.use(errorHandler);

// app.use((err, req, res, next) => {
//   if(err.isBoom) {
//     const {output} = err;
//     res.status(output.statusCode).json(output.payload);
//   } else {
//     next(err);
//   }
// });
// app.use((err, req, res, next) => {
//   res.status(404).json({
//     message: err.message,
//     stack: err.stack
//   });
// });

app.listen(port, () => {
  console.log(`mi port: ${port}`);
});
