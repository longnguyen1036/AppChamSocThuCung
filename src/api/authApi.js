import { BASE_URL_TEST } from "./BASE_URL";

import axios from "axios";

const Register = async (nameAccount, emailAccount, passwordAccount) =>{
    try {
        const register = await axios.post(`${BASE_URL_TEST}/email`,
        {
            nameAccount,
            emailAccount,
            passwordAccount,
        } );
        console.log('api register',register);
        return register;
    } catch (error) {
        console.log('loi api register',error);
        return null;
    }
};


export default{
    Register,
}