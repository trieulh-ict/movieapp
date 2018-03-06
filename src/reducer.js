import { combineReducers } from 'redux'
import counterReducer from 'modules/counter/reducer'
import peopleReducer from 'modules/people/reducer'

const rootReducer = combineReducers({
  counter: counterReducer,
  people: peopleReducer,
})

export default rootReducer
