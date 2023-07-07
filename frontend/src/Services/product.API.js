import axios from "axios"
const URL = `http://localhost:8080`;
//post product
export const addProducts = async(data) => {
    try {
        return await axios.post(`${URL}/uploadProduct`,data)
    } catch (error) {
        console.log('Error while calling add product API', error)
    }
}