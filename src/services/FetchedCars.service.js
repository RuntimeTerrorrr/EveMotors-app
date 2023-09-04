import axios from 'axios'

let API_URL = "https://evemotors-server-dt8dnn0gs-apocalypse404.vercel.app/main/"

export const FetchedCars = async () => {

    try {
        let response = await axios.get(API_URL + 'cars')

        return response.data;
        
    } catch (error){
        console.log(error)
    }
};