import axios from "axios";

let API_URL = 'https://eve-motors-server.vercel.app/main/'

const UserRegistration = async (formdata) => {
    try {

        let process = await axios.post(API_URL + "register", formdata);
        return process.data;

    } catch (error) {
        console.error(error);
    }
};

export default UserRegistration;