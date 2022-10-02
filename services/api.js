import axios from "axios";
import qs from "qs";
import { API_KEY, API_URL } from "./api_config";


const apiHandler = async ({ query, url, method }) => {

    const request = {
        
        method: method.toLowerCase(),
        url: API_URL + url,
        params: {
            api_key: API_KEY,
            query: query
        },
    }
    // console.log('request handler page', request)
    axios
    try {
        const response = await axios(request)
        // console.log('response', response)
        return response?.data

    } catch (error) {
        console.log('api js error', error)
        if (axios.isAxiosError(error)) {
            return error.response.data;
        }
        return error;
    }
}

export default apiHandler;




