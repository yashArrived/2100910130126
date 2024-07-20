// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [company, setCompany] = useState('AMZ');
  const [category, setCategory] = useState('Phone');
  const [max, setMax] = useState(10);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('/api/products', {
        params: { company, category, max }
      });
      setProducts(response.data);
    };
    fetchProducts();
  }, [company, category, max]);

  return (
    <>
      <div>
        <h1>Product List</h1>
        <ul>
          {products.map(product => (
            <li key={product.name}>
              <Link to={`/product/${product.name}`}>{product.name}</Link>
              <p>Price: ${product.price}</p>
              <p>Discount: {product.discount * 100}%</p>
              <p>Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductList;
