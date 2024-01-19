import axios from "axios";

const axiosUrl = axios.create({
    baseURL:"https://baat-cheet-nd2v.onrender.com/api/"
})

export default axiosUrl