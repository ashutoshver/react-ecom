import axios from 'axios';

export const fetchDataFromApi = async () => {

    const url = "https://ashujson.onrender.com/categories";
    try {
        const { data } = await axios.get(url);
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}

