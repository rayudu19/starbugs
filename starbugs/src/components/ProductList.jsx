import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = () => {
  const products = [
    {
      name: 'Caffè Latte',
      description: 'Espresso with steamed milk and a light layer of foam.',
      price: 4.5,
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Espresso',
      description: 'Strong black coffee brewed by forcing steam through ground coffee beans.',
      price: 3.0,
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Caramel Macchiato',
      description: 'Espresso with steamed milk, vanilla syrup, and caramel drizzle.',
      price: 5.0,
      image: 'https://via.placeholder.com/150'
    }
  ];

  return (
    <section className="product-list">
      {products.map((product, index) => (
        <ProductCard 
          key={index} 
          name={product.name} 
          description={product.description} 
          price={product.price} 
          image={product.image} 
        />
      ))}
    </section>
  );
}

export default ProductList;
