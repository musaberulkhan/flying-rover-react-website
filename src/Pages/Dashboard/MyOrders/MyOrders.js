import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import useAuth from '../../../Hooks/useAuth';
import MyOrder from './MyOrder/MyOrder';
import './MyOrders.css';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    //  ----------------    Get Order Details Using Email   ---------------
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    //  ----------------    Handle Cancel Order Button   ---------------
    const handleCancelOrderButton = id => {
        const processed = window.confirm('Are you sure you want to delete?');
        if (processed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {                        
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                        alert('Deleted');
                    }
                });
        }
    }
    
    return (
        <div className="py-3">
            <h2 className="text-center mb-4">My Orders</h2>
            {
                //  ----------------    Display My Orders   ---------------
                orders?.map(order => <MyOrder
                    key={order._id}
                    order={order}
                    handleCancelOrderButton={handleCancelOrderButton}
                >                   
                </MyOrder>)
            }
        </div>
    );
};

export default MyOrders;