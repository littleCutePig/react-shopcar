const defaultState = {
  list: []
};

const listReducer = (state = defaultState, action) => {
  // console.log("listReducer", state);
  let newState = state;
  // console.log(action)
  switch (action.type) {
    case "INIT":
      newState = {
        ...state,
        list: [...action.value]
      };
    default:
      break;
  }
  return newState;
};
export default listReducer;
