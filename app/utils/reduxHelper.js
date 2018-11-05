import PropTypes from 'prop-types';

export const buildDispatch = (actions, props, dispatch) => {
  const keys = Object.keys(props);
  const obj = {};
  keys.forEach((key) => {
    const type = props[key];
    if (type === PropTypes.func) {
      obj[key] = (...theArgs) => {
        const action = actions[key];
        dispatch(action(...theArgs));
      };
    }
  });
  return obj;
};

export const buildStateProps = (stateKey, props, state) => {
  const pageState = state.get(stateKey);
  const keys = Object.keys(props);
  const obj = {};
  keys.forEach((key) => {
    const type = props[key];
    if (type === PropTypes.any) {
      obj[key] = pageState.get(key);
    }
  });
  return obj;
};
