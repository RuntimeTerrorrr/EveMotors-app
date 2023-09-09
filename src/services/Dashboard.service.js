import axios from "axios";

let API_URL = 'https://evemotors-serverfinal.vercel.app/admin/'

export const FormDashboard = async (formData) => {

    try {

        let process = await axios.post(API_URL + 'dashboard', formData);
        return process.data;

    } catch (error) {
        console.error(error);
    }

};