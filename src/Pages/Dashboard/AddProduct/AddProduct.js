import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    // ----------------------   Form On Submit Handler    -----------------------
    const onSubmit = data => {
        // ----------------------   Get Form Data and Make Details and Array    -----------------------
        const formData = data;
        formData.features = formData.features.split(",");
        let trimedDetails = formData.features.map(feature => feature.trim());
        formData.features = trimedDetails;
        formData.rating = 0;
        formData.sales = 0;
       

        // ----------------------   Send Form Data to Server    -----------------------
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    alert('Product Added');
                    reset();
                }               
            });

    }
    return (
        <div className="my-3">
            <h2 className="text-center pb-4">Add New Product</h2> 
            <div className="d-flex justify-content-center">
                {/*  ----------------------   Add New Package Form     ----------------------- */}
                <form className="responsive-form" onSubmit={handleSubmit(onSubmit)}>
                    {/*  ----------------------   Package Name     ----------------------- */}
                    <div className="mb-3">
                        <label className="form-label">Product Name</label>
                        <input type="text" className="form-control" {...register("name", { required: true })} />
                        <p className="text-danger">{errors.name?.type === 'required' && "Package Name is required"}</p>
                    </div>

                     {/*  ----------------------   Price     ----------------------- */}
                     <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input type="number" placeholder="" className="form-control mb-2" {...register("price", { required: true })} />
                        <p className="text-danger">{errors.price?.type === 'required' && "Price is required"}</p>
                    </div>
                 
                    {/*  ----------------------   Details     ----------------------- */}
                    <div className="mb-3">
                        <label className="form-label">Features</label>
                        <textarea type="text" placeholder="Write Features and Seperate with comma" className="form-control mb-2" {...register("features", { required: true })} />
                        <p className="text-danger">{errors.features?.type === 'required' && "Features are required"}</p>
                    </div>

                    {/*  ----------------------   Image Link     ----------------------- */}
                    <div className="mb-3">
                        <label className="form-label">Image Link</label>
                        <input type="text" placeholder="Paste Image Link Here" className="form-control mb-2" {...register("image", { required: true })} />
                        <p className="text-danger">{errors.image?.type === 'required' && "Image Link is required"}</p>
                    </div>                   

                    {/*  ----------------------   Add Button     ----------------------- */}
                    <input className="btn btn-success" type="submit" value="Add New Product" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;