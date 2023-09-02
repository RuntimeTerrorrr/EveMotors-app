import axios from "axios";

let API_URL = 'http://localhost:3000/admin/'

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