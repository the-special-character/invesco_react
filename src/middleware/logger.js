const logger = () => next => action => {
  console.log(action);
  next(action);
};

export default logger;
