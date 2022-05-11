
import axios from 'axios'

const USERS_REST_API_URL = 'http://localhost:8085/guideget';
const JOURNEY_REST_API_URL="http://localhost:8085/treks";
const CUST_BOOKINGS=`http://localhost:8085/booking/${sessionStorage.getItem("emailId")}`;
const BOOKINGS=`http://localhost:8085/bookingdetailscust/${sessionStorage.getItem("emailId")}`;
class UserService {

    getUsers(){
        return axios.get(USERS_REST_API_URL);
    }
    getTreks(){
        return axios.get(JOURNEY_REST_API_URL);
    }
    getCustBookings(){
        return axios.get(CUST_BOOKINGS);
    }
    getBookings(){
        return axios.get(BOOKINGS);
    }

}

export default new UserService();

