import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import './ManageAllOrders.css';
import ManageOrder from './ManageOrder/ManageOrder';

const ManageAllOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [updateId, setUpdateId] = useState('');

    //  ----------------    Get Order Details Using Email   ---------------
    useEffect(() => {
        fetch(`https://whispering-chamber-62649.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [updateId]);

    //  ----------------    Handle Cancel Order Button   ---------------
    const handleCancelOrderButton = id => {
        const processed = window.confirm('Are you sure you want to delete?');
        if (processed) {
            fetch(`https://whispering-chamber-62649.herokuapp.com/orders/${id}`, {
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


    //  ----------------    Handle Approve Order Button   ---------------
    const handleApproveOrderButton = id => {
        fetch(`https://whispering-chamber-62649.herokuapp.com/orderUpdate/${id}`)
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setUpdateId(id);
                }
            })
    }

    return (
        <div className="py-3">
            <h2 className="text-center mb-4">Manage All Orders</h2>
            {
                //  ----------------    Display All Orders   ---------------
                orders?.map(order => <ManageOrder
                    key={order._id}
                    order={order}
                    handleCancelOrderButton={handleCancelOrderButton}
                    handleApproveOrderButton={handleApproveOrderButton}
                >
                </ManageOrder>)
            }
        </div>
    );
};

export default ManageAllOrders;