import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import './Purchase.css';

const Purchase = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const history = useHistory();
    const { user } = useAuth();
    const { register, formState: { errors }, handleSubmit } = useForm();

    // ----------------------   Load Package Details    -----------------------
    useEffect(() => {
        fetch(`https://whispering-chamber-62649.herokuapp.com/products/${id}`)
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
        fetch('https://whispering-chamber-62649.herokuapp.com/orders', {
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
        <div className="purchase footer-parent">
            <Header></Header>
            <div className="container mb-5">
                <h2 className="text-center my-5">Purchase Product</h2>

                {/* -----------  Purchase Product Details  ------------ */}
                <div className="product row p-2">
                    <div className="text-center mb-3 col-md-6 p-3">
                        <img className="product-image me-5" src={product?.image} alt="" />
                    </div>
                    <div className="col-md-6 p-3 d-flex align-items-center">
                        <div>
                            <h4>{product.name}</h4>
                            <h5>Price: ${product.price}</h5>
                            <ul className="ps-1">
                                {
                                    product?.features?.map(feature => <li
                                        key={feature}
                                    >
                                        - {feature}</li>)
                                }
                            </ul>
                            <h6>Rating: {product.rating}</h6>
                            <h6>Sales: {product.sales}+</h6>
                        </div>
                    </div>
                </div>
                <div className="py-5">
                    {/* ----------------------   Billing Information    ----------------------- */}
                    <h4 className="my-3 text-center">Billing Information</h4>
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
                            {/* -----------------   Phone Number    --------------- */}
                            <div className="mb-3">
                                <label className="form-label">Phone Number</label>
                                <input type="text" placeholder="Phone Number" className="form-control" {...register("phone", { required: true })} />
                                <p className="text-danger">{errors.phone?.type === 'required' && "Phone number is required"}</p>
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
                            <input className="btn btn-success" type="submit" value="Confirm Purchase" />
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Purchase;