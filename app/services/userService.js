import Service from "./service";

const restUserModelEndpointApi = "users";

export function fetchUsers(params = {}) {
  return Service.get(restUserModelEndpointApi, params);
}

export function createUsers(data = {}) {
  return Service.post(restUserModelEndpointApi, data);
}

export function deleteUsers(userId) {
  return Service.delete(restUserModelEndpointApi, userId);
}

export function updateUsers(userId, data = {}) {
  return Service.put(restUserModelEndpointApi, userId, data);
}
