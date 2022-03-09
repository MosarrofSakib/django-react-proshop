import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://django-react-smartshop.herokuapp.com/" || "http://127.0.0.1:8000/",
});

export default instance;
/* https://django-react-my-proshop.herokuapp.com/
  http://127.0.0.1:8000/
*/
