import axios from 'axios'

const API_URL = 'https://eve-motors-server.vercel.app//main/';

export const FetchedCars = async () => {

    try {
        let response = await axios.get(API_URL + 'cars')

        return response.data;

    } catch (error) {
        console.log(error)
    }
};