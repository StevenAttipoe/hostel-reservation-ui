import axios from "axios";

const RESIDENT_BASE_API_URL = "http://localhost:8080/api/v1/residents";

class ResidentService{

    signUpResident(resident){
        return axios.post(RESIDENT_BASE_API_URL, resident);
    }

}

export default new ResidentService;