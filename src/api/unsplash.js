import axios from "axios";

// configuratoion to call api request
export default axios.create({
  //creates a copy of axios and makes an api request
  baseURL: " https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID JXckdA-ySkjvYI2AHH8u0-1xtELGdIXvTr00cBpNNJg",
  },
});
