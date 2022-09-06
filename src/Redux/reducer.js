import * as types from "./actionType";

const initialState = {
  users: [],
};

const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case types.DELETE_USERS:
      return {
        ...state,
        users: state.users.filter((x) => x.id !== action.payload.id),
      };
    case types.ADD_USERS:
      console.log("whatcomes", action.payload);
      return {
        ...state,

        users: [...state.users, action.payload],
      };

    case types.GET_SINGLE_USERS:
      console.log("action.payload", action.payload);
      return {
        ...state,
        updateUser: action.payload,
      };

    case types.UPDATE_USER_SUCCESS:
      console.log("update reducer", action.payload);
      return {
        ...state,
        users: state.users.map((x) =>
          x.id == action.payload.id ? action.payload : x
        ),
      };

    default:
      return state;
  }
};

export default usersReducers;