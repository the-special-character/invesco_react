const getLoadingMatches = actionType =>
  /(.*)_(FAILURE)/.exec(actionType);

const wait = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

const errorHandling = () => next => async action => {
  const match = getLoadingMatches(action.type);

  if (!match) next(action);

  //   server call
  await wait(3000);

  next(action);
};

export default errorHandling;
