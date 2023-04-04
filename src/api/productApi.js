import { BASE_URL_TEST } from "./BASE_URL";

import axios from "axios";
import { getToken } from "../helper/auth";

const getAllFavorite = async () => {
    try {
        const token = await getToken();
        const getFavorite = await axios.get(`${BASE_URL_TEST}/listfavorite`, {
            headers: {
                token: `Bearer ${token}`,
            },
        });
        // console.log('getProfile', getProduct)
        return getFavorite

    } catch (error) {
        console('loi api getProfile error', error);

    }

}

const getAllProducts = async (name) => {
    try {
        const token = await getToken();
        const getProducts = await axios.get(`${BASE_URL_TEST}/getall/${name}`, {
            headers: {
                token: `Bearer ${token}`,
            },
        });
        // console.log('getProfile', getProduct)
        return getProducts

    } catch (error) {
        console('loi api getProfile error', error);

    }

}

export default {
    getAllFavorite,
    getAllProducts
}