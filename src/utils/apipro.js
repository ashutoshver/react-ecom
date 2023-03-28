import axios from 'axios';

export const fetchDataFromApiPro = async () => {

    const url = "https://ashujson.onrender.com/products";
    try {
        const { data } = await axios.get(url);
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}