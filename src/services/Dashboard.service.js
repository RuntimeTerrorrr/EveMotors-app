import axios from "axios";

let API_URL = 'https://evemotors-server-dt8dnn0gs-apocalypse404.vercel.app/admin/'

export const FormDashboard = async (formData) => {

    try {

        let process = await axios.post(API_URL + 'dashboard', formData);
        return process.data;

    } catch (error) {
        console.error(error);
    }

};