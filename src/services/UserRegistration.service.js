import axios from "axios";

let API_URL = 'https://evemotors-serverfinal.vercel.app/main/'

const UserRegistration = async (formdata) => {
    try {

        let process = await axios.post(API_URL + "register", formdata);
        alert('User has been registered');
        return process.data;

    } catch (error) {
        console.error(error);
    }
};

export default UserRegistration;