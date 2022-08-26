// import { type } from "@testing-library/user-event/dist/type";
import * as types from './actionType'

const initialState = {
  users: [],
}
const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        users: action.payload,
      }
    case types.DELETE_USERS:
      return {
        ...state,
        users: action.payload,
      }
    case types.ADD_USERS:
      return {
        ...state,
        users: action.payload,
      }

    default:
      return state
  }
}

export default usersReducers
