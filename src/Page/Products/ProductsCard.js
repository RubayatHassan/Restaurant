import React from 'react';

const ProductsCard = ({product}) => {
    const {name, price, image, description, ingredients, vegetarian} = product;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Discription: {description}</p>
                    <h1 className='text-green-600'>Ingredients: {ingredients}</h1>
                    <p className='text-purple-600'>Rating: {vegetarian}</p>
                    <p className='text-2xl text-orange-600 font-semibold'>$ {price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;