import { combineReducers } from 'redux'
import { ADD_USER } from '../actions/actions'

function user(state, action) {
   switch (action.type) {
      case ADD_USER:
         return {
            id: action.id,
            text: action.text,
         }
      default:
         return state
   }
}
function users(state = [], action) {
   switch (action.type) {
      case ADD_USER:
         return [
            ...state,
            user(undefined, action)
         ]
      default:
         return state
   }
}
const userApp = combineReducers({
   users
})
export default userApp