import axios from "axios";
import { NotificationWithIcon } from "./Notifications";

const BASEURL = `${process.env.REACT_APP_BACKEND_API_URL}/api`;
console.log(BASEURL, "BaseeeUrrrlllll");

const Axios=axios.create({
    baseURL:BASEURL
})


Axios.interceptors.response.use(
    response => {
        return response
    },
    error =>{
        console.log(error.response.status,'error.response.status');
        if (error.response.status == 401) {
            // network error
            NotificationWithIcon("error", "No token provided");
            localStorage.removeItem("persist:root");
            localStorage.removeItem("user");
            window.location.href = "/";
      
            console.log(error, "network error"); 
          } else if (error.response.status == 406) {
            console.log(error.response.status, "statusserrror")
            NotificationWithIcon("error", "Session Expired! Please Login Again");
            localStorage.removeItem("persist:root");
            localStorage.removeItem("user");
            window.location.href = "/";
          } else {
            console.log(error.response, " error.response");
            // localStorage.removeItem("user")
            // console.log(error.response.data, "errorrupadered");
            // console.log(error.response.status);
            // console.log(error.response.headers);
          }
      
          return Promise.reject(error);
    }
    
)

export default Axios;