import { BASE_URL_TEST } from "./BASE_URL";

import axios from "axios";

const Register = async (nameAccount, emailAccount, passWordAccount) =>{
    try {
        // console.log( 'log name accccc',nameAccount, emailAccount, passWordAccount);
        const register = await axios.post(`${BASE_URL_TEST}/email`,
        {
            nameAccount,
            emailAccount,
            passWordAccount,
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
        console.log('truyen vao login', emailAccount, passWordAccount);
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

export default{
    Register,
    OTPRegister, 
    Login
}