
import axios from 'axios'

const USERS_REST_API_URL = 'http://localhost:8080/guideget';
const JOURNEY_REST_API_URL="http://localhost:8080/treks";
class UserService {

    getUsers(){
        return axios.get(USERS_REST_API_URL);
    }
    getTreks(){
        return axios.get(JOURNEY_REST_API_URL);
    }

}

export default new UserService();

