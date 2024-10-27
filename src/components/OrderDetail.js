import React, { useState, useEffect } from 'react';
import { getOrderById } from '../services/api';
import { useParams } from 'react-router-dom';

const OrderDetail = () => {
    const { id } = useParams();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        fetchOrder();
    }, []);

    const fetchOrder = async () => {
        try {
            const response = await getOrderById(id);
            setOrder(response.data);
        } catch (error) {
            console.error("Error fetching order:", error);
        }
    };

    if (!order) return <div>Loading...</div>;

    return (
        <div>
            <h2>Chi Tiết Đơn Hàng</h2>
            <p>Mã đơn hàng: {order.orderCode}</p>
            <p>Tên khách hàng: {order.customerName}</p>
            <p>Số điện thoại: {order.customerPhone}</p>
            <p>Thành tiền: {order.totalAmount}</p>
            <p>Ngày tạo: {new Date(order.createdAt).toLocaleDateString()}</p>
            <h3>Danh sách sản phẩm</h3>
            <ul>
                {order.orderItems.map(item => (
                    <li key={item.id}>
                        Mã sản phẩm: {item.productId} - Số lượng: {item.quantity} - Giá bán: {item.salePrice} - Thuế: {item.totalLineTax}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderDetail;
