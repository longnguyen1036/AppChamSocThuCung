import { BASE_URL_TEST } from "./BASE_URL";

import axios from "axios";
import { getToken } from "../helper/auth";

const Register = async (nameAccount, emailAccount, passWordAccount, address, numberphone) =>{
    try {
        // console.log( 'log name accccc',nameAccount, emailAccount, passWordAccount);
        const register = await axios.post(`${BASE_URL_TEST}/email`,
        {
            nameAccount,
            emailAccount,
            passWordAccount,
            address,
            numberphone
        } );
        // console.log('api register',register);
        return register;
    } catch (error) {
        console.log('loi api register',error);
        return null;
    }
};

const OTPRegister = async(otpAcount)=>{
    
    try {
        // console.log( 'log name accccc',otpAcount);
        const registerotp = await axios.post(`${BASE_URL_TEST}/checkotp`,
        {
            otpAcount,
        } );
        // console.log('api registerotp',registerotp);
        return registerotp;
    } catch (error) {
        console.log('loi api registerotp',error);
        return error;
    }
}
const Login = async(emailAccount, passWordAccount)=>{
    
    try {
        // console.log('truyen vao login', emailAccount, passWordAccount);
        const login = await axios.post(`${BASE_URL_TEST}/checklogin`,
        {
            emailAccount,
            passWordAccount,
        } );
        // console.log('api login',login);
        return login;

    } catch (error) {
        console('loi api login error', error);
        return error;
    }
}


const getProfile = async () => {
    try {
        const token = await getToken();
        const getProduct = await axios.get(`${BASE_URL_TEST}/getinfor`, {
            headers: {
                token: `Bearer ${token}`,
            },
        });
        // console.log('getProfile', getProduct)
        return getProduct

    } catch (error) {
        console('loi api getProfile error', error);

    }

}

const UpdateProfile = async (address) => {
    try {
        const token = await getToken();
        const getProduct = await axios.post(`${BASE_URL_TEST}/updateuser`,
        {
            address
        },
        {
            headers: {
                token: `Bearer ${token}`,
            },
        });
        // console.log('UpdateProfile', getProduct)
        return getProduct

    } catch (error) {
        console('loi api UpdateProfile error', error);

    }

}

const UpdateTokenFCM = async (tokenFCM) => {
    try {
        const token = await getToken();
        const getProduct = await axios.post(`${BASE_URL_TEST}/updateuser`,
        {
            tokenFCM
        },
        {
            headers: {
                token: `Bearer ${token}`,
            },
        });
        // console.log('UpdateTokenFCM', getProduct)
        return getProduct

    } catch (error) {
        console('loi api UpdateTokenFCM error', error);

    }

}

const getMessengerApi = async () => {
    try {
        const token = await getToken();
        const getMess = await axios.get(`${BASE_URL_TEST}/listmess`, {
            headers: {
                token: `Bearer ${token}`,
            },
        });
        // console.log('getProfile', getMess)
        return getMess

    } catch (error) {
        console('loi api getMess error', error);

    }
}

const forgetPass = async (emailAccount)=>{
    try {
        const forget = await axios.post(`${BASE_URL_TEST}/sendforgot`,
        {
            emailAccount,
        });
        return forget;

    } catch (error) {
        console('loi api login error', error);
        return error;
    }
}

const OtpForgetPass = async (otpAccount) => {
    try {
        const otpForget = await axios.post(`${BASE_URL_TEST}/checkotppass`,
        {
            otpAccount,
        });
        return otpForget;
    } catch (error) {
        console.log('error',error);
    }
}

const UpdatePass = async (id, pass) => {
    try {
        const updatepass = await axios.post(`${BASE_URL_TEST}/updatepass`,
        {
            id,
            pass
        });
        return updatepass;
    } catch (error) {
        console.log('error',error);
    }
}

export default{
    Register,
    OTPRegister, 
    Login,
    getProfile,
    UpdateProfile,
    UpdateTokenFCM,
    getMessengerApi,
    forgetPass,
    OtpForgetPass,
    UpdatePass
}