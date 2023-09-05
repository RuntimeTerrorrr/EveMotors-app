import axios from "axios";

let API_URL ="https://evemotors-server-dt8dnn0gs-apocalypse404.vercel.app/main/";

const UserSignIn = async (formdata) => {
    try {

        let process = await axios.post(API_URL + "login", formdata);
        return process.data;

    } catch (error) {
        console.error(error);
    }
};

export default UserSignIn;