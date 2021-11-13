import { useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    
    const getProducts = () => {
        fetch(`https://whispering-chamber-62649.herokuapp.com/products`)
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