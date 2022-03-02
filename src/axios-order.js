import axios from "axios";

const instance = axios.create({
  baseURL: "https://django-react-my-proshop.herokuapp.com/",
});

export default instance;
