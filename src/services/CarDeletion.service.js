import axios from "axios";

const API_URL = 'http://localhost:3000/main/';

export const CarDeletion = async (carId) => {
    try {

        let process = await axios.delete(API_URL + 'cars/${carId}', carId);
        return process.data;

    } catch (error) {
        console.log(error);
    }
};