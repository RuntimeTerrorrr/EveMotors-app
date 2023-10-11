import axios from 'axios'

const API_URL = 'http://192.168.99.137:3000/main/';

export const FetchedCars = async () => {

    try {
        let response = await axios.get(API_URL + 'cars')

        return response.data;

    } catch (error) {
        console.log(error)
    }
};