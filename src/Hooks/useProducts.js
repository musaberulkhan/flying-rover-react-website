import { useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    
    const getProducts = () => {
        fetch(`http://localhost:5000/products`)
        .then(res => res.json())
        .then(data => setProducts(data));
    }    

     // ---------- Return all elements  ---------
     return {
        getProducts,
        products
    }
}

export default useProducts;