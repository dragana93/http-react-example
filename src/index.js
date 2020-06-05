import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axious from "axios";

axious.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axious.defaults.headers.common["Authorization"] = "AUTH TOKEN";
axious.defaults.headers.post["Content-Type"] = "application/json";

axious.interceptors.request.use(
  (request) => {
    console.log(request);
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

axious.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
