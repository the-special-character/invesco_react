const initialState = {};

const getLoadingMatches = actionType =>
  /(.*)_(REQUEST|FAILURE)/.exec(actionType);

export default (
  state = initialState,
  { type, payload },
) => {
  if (type === 'CLEAR_ERROR') {
    const { [payload]: name, ...rest } = state;
    return rest;
  }

  const match = getLoadingMatches(type);

  if (!match) return state;

  const [, actionName, actionType] = match;

  if (actionType === 'FAILURE') {
    return { ...state, [actionName]: payload };
  }
  const { [actionName]: name, ...rest } = state;
  return rest;
};
