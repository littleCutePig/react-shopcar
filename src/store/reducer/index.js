import { combineReducers } from 'redux'
import listReducer from './listReducer'
import shopReducer from './shopReducer'
const reducer = combineReducers({
  listReducer,
  shopReducer
})

export default reducer
