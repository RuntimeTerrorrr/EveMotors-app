import axios from "axios";

const API_URL = 'https://eve-motors-server.vercel.app//admin';

export const CarDeletion = async (carId) => {
    try {

        let process = await axios.delete(API_URL + 'cars/${carId}', carId);
        return process.data;

    } catch (error) {
        console.log(error);
    }
};