const initialState = {};

const getLoadingMatches = actionType =>
  /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(actionType);

export default (
  state = initialState,
  { type, payload, loadingId },
) => {
  const match = getLoadingMatches(type);

  if (!match) return state;

  const [, actionName, actionType] = match;

  if (actionType === 'REQUEST') {
    if (loadingId) {
      return {
        ...state,
        [actionName]: [
          ...(state[actionName] || []),
          loadingId,
        ],
      };
    }
    return {
      ...state,
      [actionName]: payload,
    };
  }
  const { [actionName]: name, ...rest } = state;

  if (!loadingId) return rest;

  const updatedState = name.filter(x => x !== loadingId);

  if (updatedState.length === 0) {
    return rest;
  }

  return { ...rest, [actionName]: updatedState };
};
