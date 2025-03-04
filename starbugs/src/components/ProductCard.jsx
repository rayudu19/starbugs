import React from 'react';
import './ProductCard.css';

const ProductCard = ({ name, description, price, image }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image"/>
      <div className="product-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <p className="price">${price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
