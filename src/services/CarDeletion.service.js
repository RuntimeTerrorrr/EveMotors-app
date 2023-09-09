import axios from "axios";

let API_URL = 'https://evemotors-serverfinal.vercel.app/admin/'

export const CarDeletion = async (carId) => {
    try {

        let process = await axios.delete(API_URL + 'cars/${carId}', carId);
        return process.data;

    } catch (error) {
        console.log(error);
    }
};