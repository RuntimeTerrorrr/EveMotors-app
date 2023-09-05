import axios from "axios";

let API_URL = 'https://evemotors-server-dt8dnn0gs-apocalypse404.vercel.app/main/'

const UserRegistration = async (formdata) => {
    try {

        let process = await axios.post(API_URL + "register", formdata);
        return process.data;

    } catch (error) {
        console.error(error);
    }
};

export default UserRegistration;