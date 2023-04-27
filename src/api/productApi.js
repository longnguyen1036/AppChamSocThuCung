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

const getAllProductStore = async (_id) => {
    try {
        const token = await getToken();
        const getAll = await axios.get(`${BASE_URL_TEST}/getallproductstore/${_id}`,{
            headers: {
                token: `Bearer ${token}`,
            },
        })

        return getAll
    } catch (error) {
        console.log('error', error);
    }
}

const addCartProduct = async (id, ProductId, nameModel) => {
    try {
        const token = await getToken();
        const addCartProductStore = await axios.post(`${BASE_URL_TEST}/addcart`,{
            id, 
            ProductId,
            nameModel
        },{
            headers: {
                token: `Bearer ${token}`,
            },
        })

        return addCartProductStore
    } catch (error) {
        console.log('loi api addFavorite product error', error)
    }
}

const getCartProduct = async () => {
    try {
        const token = await getToken();
        const getCart = await axios.get(`${BASE_URL_TEST}/getlistcart/`,{
            headers: {
                token: `Bearer ${token}`,
            },
        })

        return getCart
    } catch (error) {
        console.log('error', error);
    }
}

const BuyCart = async (id, ProductId, PetId, ServiceId) => {
    try {
        console.log('truyen vao buy cart', id, ProductId, PetId, ServiceId);
        const token = await getToken();
        const buyCart = await axios.post(`${BASE_URL_TEST}/buyproduct`,{
            id, 
            ProductId,
            PetId,
            ServiceId
        },{
            headers: {
                token: `Bearer ${token}`,
            },
        })

        return buyCart
    } catch (error) {
        console.log('loi api addFavorite product error', error)
    }
}

const BookingService = async (idUserAccount, idAccountStore, date, time, nameService, nameStore, address) => {
    try {
        const token = await getToken();
        const bookService = await axios.post(`${BASE_URL_TEST}/booking`,{
            idUserAccount, 
            idAccountStore,
            date,
            time,
            nameService,
            nameStore,
            address
        },{
            headers: {
                token: `Bearer ${token}`,
            },
        })

        return bookService
    } catch (error) {
        console.log('loi api bookService product error', error)
    }
}

const getListHistory = async () => {
    try {
        const token = await getToken();
        const getHistory = await axios.get(`${BASE_URL_TEST}/getlisthistory`,{
            headers: {
                token: `Bearer ${token}`,
            },
        })

        return getHistory
    } catch (error) {
        console.log('error', error);
    }
}

const getHistoryService = async () => {
    try {
        const token = await getToken();
        const getSevice = await axios.get(`${BASE_URL_TEST}/getlistbook`,{
            headers: {
                token: `Bearer ${token}`,
            },
        })

        return getSevice
    } catch (error) {
        console.log('error', error);
    }
}


export default {
    getAllFavorite,
    getAllProducts,
    getRandomProduct,
    addFavorite,
    getDetailProduct,
    getAllProductStore,
    addCartProduct,
    getCartProduct,
    BuyCart,
    BookingService,
    getListHistory,
    getHistoryService
}