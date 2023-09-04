import axios from "axios";

let API_URL = 'https://evemotors-server-dt8dnn0gs-apocalypse404.vercel.app/admin/'

export const FormDashboard = async (formDataToUpload) => {

    try {

        let process = await axios.post(API_URL + 'dashboard', formDataToUpload);
        alert('The car has been added!');
        return process.data;

    } catch (error) {
        console.error(error);
        alert('Could not add the car');
    }

};