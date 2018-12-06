import get from "lodash.get";

export default function getUserId(user = {}) {
  let userId = get(user, "_id", undefined);

  if (!userId) {
    userId = get(user, "id");
  }

  return userId;
}
