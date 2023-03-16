import axios from 'axios';

const URL = 'http://192.168.9.20:5000';

export async function LoginUser(email, password) {
    const res = await axios.post(`${URL}/api/users/login`, {
        email,
        password,
    });
    return res.data;
}

export async function RegisterUser(companyName, Founder, email, password, phone, address, ICE) {
    const res = await axios.post(`${URL}/api/users/register`, {
        companyName,
        Founder,
        email,
        password,
        phone,
        address,
        ICE,
    });
    return res.data;
}

export async function GetAllUsers() {
    const res = await axios.get(`${URL}/api/users/allusers`);
    return res.data;
}

export async function GetUserById(id) {
    const res = await axios.get(`${URL}/api/users/${id}`);
    return res.data;
}

