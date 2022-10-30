
function errorHandler (err, req, res, next) {
  res.satus(500).json({
    message: err.message,
    stack: err.stack
  });
}

function boomErrorHandler (err, req, res, next) {
  if(err.isBoom) {
    const {ouput} = err;
    res.status(ouput.statusCode).json(ouput.payload);
  } else {
    next(err);
  }
}

module.export = { errorHandler, boomErrorHandler };
