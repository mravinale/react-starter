import axios from "axios";
import settings from "../config/settings";

const setRestApiUrl = (endpoint, id = undefined) => {
  const apiUrl = `${settings.SERVICE.baseurl}/${endpoint}${id ? `/${id}` : ``}`;

  return apiUrl;
};

export default {
  get: (endpoint, params = {}) =>
    axios.get(setRestApiUrl(endpoint), { params }),

  post: (endpoint, data = {}) => axios.post(setRestApiUrl(endpoint), data),

  put: (endpoint, id, data = {}) =>
    axios.put(setRestApiUrl(endpoint, id), data),

  delete: (endpoint, id) => axios.delete(setRestApiUrl(endpoint, id))
};
