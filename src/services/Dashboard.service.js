import axios from "axios";

const API_URL = 'http://192.168.99.137:3000/admin/';

export const FormDashboard = async (formData) => {

    try {

        let process = await axios.post(API_URL + 'dashboard', formData);
        return process.data;

    } catch (error) {
        console.error(error);
    }

};