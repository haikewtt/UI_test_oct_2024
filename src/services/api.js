import axios from 'axios';

const API_URL = 'http://localhost:5129/api/Orders'; // URL của backend API

// Lấy danh sách đơn hàng
export const getOrders = async () => {
    return await axios.get(API_URL);
};

// Tạo mới đơn hàng
export const createOrder = async (orderData) => {
    return await axios.post(API_URL, orderData);
};

// Lấy chi tiết một đơn hàng theo ID
export const getOrderById = async (id) => {
    return await axios.get(`${API_URL}/${id}`);
};
