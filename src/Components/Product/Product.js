import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = ({product, handleAddToCart}) => {
    const {img,name,seller,price,ratings,stock} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Brand: {seller}</p>
                <p><small>Ratings: {ratings} Stars</small></p>
                <p>In Stock: {stock}Pieces</p>
                <p className='product-price'>Price: ${price}</p>
            </div>
            <button onClick={()=> handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>


        </div>
    );
};

export default Product;