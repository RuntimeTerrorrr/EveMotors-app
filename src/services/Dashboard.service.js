import axios from "axios";

const API_URL = 'https://eve-motors-server.vercel.app/admin/';

export const FormDashboard = async (formData) => {

    try {

        let process = await axios.post(API_URL + 'dashboard', formData);
        return process.data;

    } catch (error) {
        console.error(error);
    }

};