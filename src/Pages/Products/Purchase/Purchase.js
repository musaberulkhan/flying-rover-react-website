import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import Header from '../../Header/Header';
import './Purchase.css';

const Purchase = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [formData, setFormData] = useState({});
    const history = useHistory();
    const { user } = useAuth();
    const { register, formState: { errors }, handleSubmit } = useForm();

    // ----------------------   Load Package Details    -----------------------
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);


    // ----------------------   Handle Form On Submit    ----------------------- 
    const onSubmit = data => {
        // ----------------------   Get Form data and add status   -----------------------
        const formData = data;
        formData.user = user.email;
        formData.productId = product._id;
        formData.status = "pending";

        // ----------------------   Send Form Data to Server    -----------------------
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    history.push('../../purchaseSuccessful');
                }
                else {
                    alert('Error Occurred!');
                }
            });
    }



    return (
        <div className="purchase">
            <Header></Header>
            <div className="container mb-5">
                <h2 className="text-center my-5">Purchase Product</h2>
                <div className="row">
                    <div className="product col-md-4 px-4 py-3">                        
                        <div className="text-center mb-3">
                            <img className="product-image me-5" src={product?.image} alt="" />
                        </div>
                        <div>
                            <h4>{product.name}</h4>
                            <h5>Price: ${product.price}</h5>
                            <ul>
                                {
                                    product?.features?.map(feature => <li
                                        key={feature}
                                    >
                                        {feature}</li>)
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-8">
                        {/* ----------------------   Billing Information    ----------------------- */}
                        <h4 className="mb-3 text-center">Billing Information</h4>
                        <div className="d-flex justify-content-center">
                            {/* -----------------   Billing Information Form    --------------- */}
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* -----------------   User Email    --------------- */}
                                <p>User Email: {user?.email}</p>

                                {/* -----------------   Full Name    --------------- */}
                                <div className="mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input defaultValue={user?.displayName || ""} type="text" className="form-control" {...register("name", { required: true })} />
                                    <p className="text-danger">{errors.name?.type === 'required' && "Name is required"}</p>
                                </div>

                                {/* -----------------   Address    --------------- */}
                                <div className="mb-3">
                                    <label className="form-label">Address</label>
                                    <input type="text" placeholder="House, Street" className="form-control mb-2" {...register("address", { required: true })} />
                                    <p className="text-danger">{errors.address?.type === 'required' && "House, Street is required"}</p>
                                    <div className="d-flex">
                                        <div>
                                            <input type="text" placeholder="Thana/Upazilla" className="form-control me-2" {...register("thana", { required: true })} />
                                            <p className="text-danger">{errors.thana?.type === 'required' && "Thana/Upazilla is required"}</p>
                                        </div>
                                        <div>
                                            <input type="text" placeholder="District" className="form-control" {...register("district", { required: true })} />
                                            <p className="text-danger">{errors.district?.type === 'required' && "District is required"}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* -----------------   Payment Method    --------------- */}
                                <div className="mb-3">
                                    <label className="form-label">Payment Method </label>
                                    <select className="form-control" {...register("payment", { required: true })}>
                                        <option value="cash" >Select a payment method (Default: Cash)</option>
                                        <option value="cash">Cash</option>
                                        <option value="bank">Bank</option>
                                    </select>
                                </div>

                                {/* -----------------   Booking Button    --------------- */}
                                <input className="btn btn-success" type="submit" value="Confirm Booking" />
                            </form>
                        </div>
                    </div>
                </div>
                {
                    // -----------  Purchase Product Details  ------------

                }

            </div>
        </div>
    );
};

export default Purchase;