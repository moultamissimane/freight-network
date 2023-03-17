import axios from 'axios';

const URL = 'http://192.168.9.22:3000';

export async function LoginUser({ email, password }) {
    const res = await axios.post(`${URL}/api/users/login`, {
        email,
        password,
    });
    return res.data;
}

export async function RegisterUser({ companyName, Founder, email, password, phone, address, ICE, location }) {
    const res = await axios.post(`${URL}/api/users/register`, {
        companyName,
        Founder,
        email,
        password,
        phone,
        address,
        ICE,
        location,
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

