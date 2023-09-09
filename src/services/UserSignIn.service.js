import axios from "axios";

const API_URL = 'http://localhost:3000/main/';

const UserSignIn = async (formdata) => {
    try {

        let process = await axios.post(API_URL + "login", formdata);
        return process.data;

    } catch (error) {
        console.error(error);
    }
};

export default UserSignIn;