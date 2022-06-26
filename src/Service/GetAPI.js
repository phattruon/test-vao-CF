import axios from "axios";
const baseURL = "https://api.shrtco.de/v2/";
const ShortenerAPI = {
  fetchURL: (api) => {
    return axios.get(`${baseURL}info?code=example`);
  },
};
export default ShortenerAPI;
