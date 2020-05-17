const myLogger = (store) => (next) => (action) => {
  console.group(action.type);
  // console.log('dispatch', action);
  console.info('dispatch', action);
  next(action);
  console.log('next state', store.getState());
  console.groupEnd(action.type);
};

export default myLogger;
