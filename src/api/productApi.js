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
        console.log('loi api getProfile error', error);

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
        console.log('loi api getProfile error', error);

    }

}

const getRandomProduct = async () => {
    try {
        const token = await getToken();
        const getRandom = await axios.get(`${BASE_URL_TEST}/getallrandom`, {
            headers: {
                token: `Bearer ${token}`,
            },
        });

        return getRandom
    } catch (error) {
        console.log('loi api getRandom product error', error)
    }
}

const addFavorite = async (nameFavorite, _id) => {
    try {
        const token = await getToken();
        const addFavoriteProduct = await axios.post(`${BASE_URL_TEST}/favorite`,{
            nameFavorite,
            _id
        },{
            headers: {
                token: `Bearer ${token}`,
            },
        })

        return addFavoriteProduct
    } catch (error) {
        console.log('loi api addFavorite product error', error)
    }
}

const getDetailProduct = async (_id, name) => {
    try {
        console.log('log id name', _id, name)
        const token = await getToken();
        const getDetail = await axios.get(`${BASE_URL_TEST}/getacart/${_id}/${name}`,{
            headers: {
                token: `Bearer ${token}`,
            },
        })
        // console.log('getDetail product', getDetail)
        return getDetail
    } catch (error) {
        console.log('loi api getDetail product error', error)
    }
}

export default {
    getAllFavorite,
    getAllProducts,
    getRandomProduct,
    addFavorite,
    getDetailProduct
}