const express = require('express');
const routerApi = require('./router/index.route.js')
const { errorHandler, boomErrorHandler } = require('./midlleware/errorHandler');

const app = express();
const port = 3000;

app.use(express.json());

routerApi(app);

app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {});
