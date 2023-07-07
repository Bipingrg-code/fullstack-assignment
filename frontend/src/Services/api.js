import axios from 'axios'

const URL = `http://localhost:8080`;

//post user
export const addUsers = async(data) => {
    try {
        return await axios.post(`${URL}/signup`,data)
    } catch (error) {
        console.log('Error while calling add user API', error)
    }
}
//login user
export const loginUser = async (data) => {
    try {
        return await axios.post(`${URL}/login`,data)
    } catch (error) {
        console.log('Error while calling add user API', error)
    }
}
