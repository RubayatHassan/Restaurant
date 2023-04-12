import React, { useEffect, useState } from 'react';
import ProductsCard from './ProductsCard';


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://6436e2fd8205915d34ff7df0.mockapi.io/Items')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                products.map(product =><ProductsCard
                key={product.id}
                product={product}
                ></ProductsCard>)
            }
        </div>
    )
};

export default Products;