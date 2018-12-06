import { USERS } from "../actions/actionTypes";
import getUserId from "../utils/user";

export const initialState = {
  data: [],
  selectedUser: {},
  fetch: {
    loading: false,
    error: null
  }
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case USERS.CREATE_SUCCESS:
      return {
        ...state,
        data: [action.payload, ...state.data]
      };

    case USERS.DELETE_SUCCESS:
      return {
        ...state,
        data: state.data.filter(
          user => getUserId(action.payload) !== getUserId(user)
        )
      };

    case USERS.GET_ALL_SUCCESS:
      return {
        ...state,
        data: action.payload.users
      };

    case USERS.SELECT_SUCCESS:
      return {
        ...state,
        selectedUser: action.payload
      };

    case USERS.UPDATE_SUCCESS:
      return {
        ...state,
        data: [
          action.payload,
          ...state.data.filter(
            user => getUserId(action.payload) !== getUserId(user)
          )
        ]
      };

    case USERS.LOADING_BEGIN:
      return {
        ...state,
        fetch: {
          loading: true,
          error: null
        }
      };

    case USERS.LOADING_COMPLETE:
      return {
        ...state,
        fetch: {
          loading: false,
          error: null
        }
      };

    case USERS.LOADING_FAILED:
      return {
        ...state,
        fetch: {
          loading: false,
          error: action.payload.error
        }
      };

    default:
      return state;
  }
}
