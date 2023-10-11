import axios from "axios";

const API_URL = 'http://192.168.99.137:3000/admin';

export const CarDeletion = async (carId) => {
    try {

        let process = await axios.delete(API_URL + 'cars/${carId}', carId);
        return process.data;

    } catch (error) {
        console.log(error);
    }
};