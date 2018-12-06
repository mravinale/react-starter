import { initialState as users } from "./usersReducer";
import { initialState as auth } from "./authReducer";

export default {
  auth: {
    ...auth
  },
  routing: null,
  users: {
    ...users,
    fetch: {
      ...users.fetch
    }
  }
};
