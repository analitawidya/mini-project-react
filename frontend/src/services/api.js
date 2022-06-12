import axios from 'axios';
import Cookies from 'js-cookie'

const BASE_URL = 'http://localhost:8000';

export const getAllProducts = () => {
    // Make a request for a user with a given ID
    return axios
    .get(`${BASE_URL}/products`)
        
};

export const getProductById = (id) => {
    // Make a request for a user with a given ID
    return axios
    .get(`${BASE_URL}/products/${id}`)
        

}

export const login = (name, password) => {
    const bodyJSON = {
        name: name,
        password: password
    };
    return axios.post(`${BASE_URL}/auth/login`, bodyJSON);

};

export const register = (name, address, phone_number, password) => {
    const bodyJSON = {
        name, 
        address,
        phone_number,
        password,
    }


    return axios.post(`${BASE_URL}/auth/register`, bodyJSON);
};

export const deleteProduct = (id) => {
    const token = Cookies.get('token')

    const headerConfig = {
        headers: {
            'Authorization': "Bearer" + token,
        },
    };
    return axios.delete(`${BASE_URL}/auth/products/${id}`);
}

export const addProduct = (name, price, quantity, image) => {
    const bodyJSON = {
        name, 
        price,
        quantity,
        image,
    };

    const token = Cookies.get('token')

    const headerConfig = {
        headers: {
            'Authorization': "Bearer" + token,
        },
    };


    return axios.post(`${BASE_URL}/auth/products`,bodyJSON, headerConfig);
};

export const updateProduct = (id, name, price, quantity, image) => {
    const bodyJSON = {
        name, 
        price,
        quantity,
        image,
    };

    const token = Cookies.get('token')

    const headerConfig = {
        headers: {
            'Authorization': "Bearer" + token,
        },
    };


    return axios.put(`${BASE_URL}/auth/products/${id}`,bodyJSON, headerConfig);
};





