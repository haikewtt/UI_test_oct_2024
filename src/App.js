import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OrderList from './components/OrderList';
import CreateOrder from './components/CreateOrder';
import OrderDetail from './components/OrderDetail';

function App() {
    return (
        <Router>
            <div>
                <h1>Quản lý Đơn hàng</h1>
                <Routes>
                    <Route path="/" element={<OrderList />} />
                    <Route path="/create" element={<CreateOrder />} />
                    <Route path="/orders/:id" element={<OrderDetail />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;