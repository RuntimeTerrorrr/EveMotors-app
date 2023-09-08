import axios from "axios";

let API_URL = 'https://evemotors-server-dt8dnn0gs-apocalypse404.vercel.app/admin/'

export const CarDeletion = async (carId) => {
    try {

        let process = await axios.delete(API_URL + 'cars/${carId}', carId);
        return process.data;

    } catch (error) {
        console.log(error);
    }
};