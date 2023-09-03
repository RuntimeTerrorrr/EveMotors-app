import axios from "axios";

let API_URL ="https://evemotors-server.vercel.app/main/";

const UserSignIn = async (formdata) => {
    try {

        let process = await axios.post(API_URL + "login", formdata);
        alert('User has been logged in');
        return process.data;

    } catch (error) {
        console.error(error);
    }
};

export default UserSignIn;