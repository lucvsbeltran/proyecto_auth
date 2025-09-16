const notFound = (req, res, next) => {
  res.status(404);
  const error = new Error(`No encontrado - ${req.originalUrl}`);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({ message: err.message, stack: err.stack });
};

module.exports = { notFound, errorHandler };
