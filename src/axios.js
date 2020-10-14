import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:5001/clone-2ab30/us-central1/api', // The api url(cloud function)
});
export default instance;
