import React, { useState } from 'react';
import { createOrder } from '../services/api';

const CreateOrder = () => {
    const [customerName, setCustomerName] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');
    const [items, setItems] = useState([{ productId: '', quantity: 1, salePrice: 0 }]);

    const handleAddItem = () => {
        setItems([...items, { productId: '', quantity: 1, salePrice: 0 }]);
    };

    const handleItemChange = (index, field, value) => {
        const newItems = [...items];
        newItems[index][field] = value;
        setItems(newItems);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const orderData = { customerName, customerPhone, items };
        try {
            await createOrder(orderData);
            alert("Đơn hàng đã được tạo thành công!");
        } catch (error) {
            console.error("Error creating order:", error);
        }
    };

    return (
        <div>
            <h2>Tạo Mới Đơn Hàng</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Tên khách hàng</label>
                    <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
                </div>
                <div>
                    <label>Số điện thoại</label>
                    <input type="text" value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} />
                </div>
                <h3>Sản phẩm trong đơn</h3>
                {items.map((item, index) => (
                    <div key={index}>
                        <label>Mã sản phẩm</label>
                        <input type="text" value={item.productId} onChange={(e) => handleItemChange(index, 'productId', e.target.value)} />
                        <label>Số lượng</label>
                        <input type="number" value={item.quantity} onChange={(e) => handleItemChange(index, 'quantity', e.target.value)} />
                        <label>Giá bán</label>
                        <input type="number" value={item.salePrice} onChange={(e) => handleItemChange(index, 'salePrice', e.target.value)} />
                    </div>
                ))}
                <button type="button" onClick={handleAddItem}>Thêm sản phẩm</button>
                <button type="submit">Tạo Đơn Hàng</button>
            </form>
        </div>
    );
};

export default CreateOrder;
