import axios from "axios";

// axious.defaults.headers.post["Content-Type"] = "application/json";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

instance.defaults.headers.common["Authorization"] = "AUTH TOKEN FROM INSTANCE";

export default instance;
