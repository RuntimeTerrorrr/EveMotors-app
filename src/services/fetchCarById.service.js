import axios from 'axios';

const API_URL = 'http://localhost:3000/main'

export const fetchCarById = async (carId) => {
  try {
    const response = await axios.get(API_URL + `cars/${carId}`);
    
    if (response.status === 200) {
      return response.data;
    } else {
      console.error('API request failed with status:', response.status);
      return null; // You can return null or throw an error here, depending on your error handling strategy.
    }
  } catch (error) {
    console.error('Error while fetching car by ID:', error);
    return null; // You can return null or throw an error here, depending on your error handling strategy.
  }
};
