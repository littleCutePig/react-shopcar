const defaultState = {
  list: [],
  all: false,
  allPrice: 0
};

// const computePrice = list => {
//   let all = 0;
//   list.forEach(item => {
//     if (item.checked) {
//       all += item.num * item.price;
//     }
//   });

//   return all;
// };

const shopReducer = (state = defaultState, action) => {
  let newState = state;
  switch (action.type) {
    case "ADD":
      {
        const id = action.value.id;
        const isHave = state.list.some(item => item.id === id);
        const list = isHave
          ? state.list.map(item => {
              if (item.id === id) item.num++;
              return item;
            })
          : [...state.list, { ...action.value, num: 1, checked: false }];
        newState = {
          ...state,
          list
        };
      }
      break;
    case "ALL":
      {
        newState = {
          ...state,
          list: state.list.map(item => {
            item.checked = !state.all;
            return item;
          }),
          all: !state.all
        };
      }
      break;

    case "CHECK":
      {
        const list = state.list.map(item => {
          if (item.id === action.value) item.checked = !item.checked;
          return item;
        });
        const all = list.every(item => item.checked);
        // console.log(all)
        newState = {
          ...state,
          list,
          all
        };
      }
      break;

    case "ADDNUM":
      newState = {
        ...state,
        list: state.list.map(item => {
          if (item.id === action.value) item.num++;
          return item;
        })
      };
      break;
    case "REDUCE":
      newState = {
        ...state,
        list: state.list.map(item => {
          if (item.id === action.value && item.num > 1) item.num--;
          return item;
        })
      };
      break;
    default:
      break;
  }
  return newState
  // return {
  //   ...newState,
  //   allPrice: computePrice(newState.list)
  // };
};
export default shopReducer;
