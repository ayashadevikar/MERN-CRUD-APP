import axios from 'axios';

const URL = "http://localhost:4000";

export const addUser = async (data) => {
    try {
        return await axios.post(`${URL}/createUser`, data);
    } catch (error) {
        console.log('Error while calling add User', error)
    }
}