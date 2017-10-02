const reducer = (state = { loggedIn: false }, action) => {
  switch (action.type) {
    case 'TOGGLE_LOGIN':
      return Object.assign({}, { loggedIn: action.loggedIn });
    default:
      return state;
  }
};

export default reducer;
