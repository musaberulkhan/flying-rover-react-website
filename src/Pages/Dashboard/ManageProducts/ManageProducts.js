import React, { useEffect, useState } from 'react';
import useProducts from '../../../Hooks/useProducts';
import ManageProduct from './ManageProduct/ManageProduct';
import './ManageProducts.css';

const ManageProducts = () => {
    const { products, getProducts } = useProducts();
    const [deletedId, setDeletedId] = useState({});

    useEffect(() => {
        getProducts();
    }, [deletedId]);


    //  ----------------    Handle Cancel Order Button   ---------------
    const handleDeleteProductButton = id => {
        const processed = window.confirm('Are you sure you want to delete?');
        if (processed) {
            fetch(`https://whispering-chamber-62649.herokuapp.com/products/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        setDeletedId(id);
                    }
                });
        }
    }

  
    return (
        <div className="py-2">
            <h2 className="text-center pb-3">Manage Products</h2>
            {
                products?.map(product => <ManageProduct
                    key={product._id}
                    product={product}
                    handleDeleteProductButton={handleDeleteProductButton}
                ></ManageProduct>)
            }
        </div>
    );
};

export default ManageProducts;