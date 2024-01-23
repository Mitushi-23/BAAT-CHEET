import axios from "axios";

const axiosUrl = axios.create({
    // baseURL:"http://192.168.132.101:8000/api/"
    baseURL:"https://baat-cheet-nd2v.onrender.com/api/"
})

export default axiosUrl