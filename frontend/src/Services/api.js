import axios from 'axios'

const URL = `http://localhost:8080`;

//post data
export const addUsers = async(data) => {
    try {
        return await axios.post(`${URL}/signup`,data)
    } catch (error) {
        console.log('Error while calling add user API', error)
    }
}