import axios from 'axios';

export const getData = async (param) => {
    try {
        const response = await axios.get(`https://global-warming.org/api/${param}-api`);
        return response;
    } catch (error) {
        console.log(error)
    }
}