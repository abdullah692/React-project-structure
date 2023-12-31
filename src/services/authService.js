import Axios from "../utils/axiosconfig";

class AuthService {
    login(data){
        return Axios.post(`/users/login`, data);
    }

    logout(){
        localStorage.clear();
    }

    register(data){
        return Axios.post(`/users/registerUser`, data);
    }
}

export default new AuthService();