import axios from "axios";

const API_URL = 'http://localhost:3000/main/';

const UserRegistration = async (formdata) => {
    try {

        let process = await axios.post(API_URL + "register", formdata);
        return process.data;

    } catch (error) {
        console.error(error);
    }
};

export default UserRegistration;