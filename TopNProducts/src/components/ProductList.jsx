import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import getProducts from '../services/api';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [company, setCompany] = useState('AMZ');
  const [category, setCategory] = useState('Laptop');
  const [top, setTop] = useState(10);
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(10000);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts({ company, category, top, minPrice, maxPrice });
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, [company, category, top, minPrice, maxPrice]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Product List</h1>
      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
        <div className="flex flex-col">
          <label className="block mb-2 font-semibold text-gray-700">Company:</label>
          <select
            className="block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
            onChange={(e) => setCompany(e.target.value)}
            value={company}
          >
            <option value="AMZ">AMZ</option>
            <option value="FLP">FLP</option>
            <option value="SNP">SNP</option>
            <option value="MYN">MYN</option>
            <option value="AZO">AZO</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="block mb-2 font-semibold text-gray-700">Category:</label>
          <select
            className="block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option value="Phone">Phone</option>
            <option value="Charger">Charger</option>
            <option value="Computer">Computer</option>
            <option value="TV">TV</option>
            <option value="Earphone">Earphone</option>
            <option value="Tablet">Tablet</option>
            <option value="Mouse">Mouse</option>
            <option value="Keypad">Keypad</option>
            <option value="Bluetooth">Bluetooth</option>
            <option value="Pendrive">Pendrive</option>
            <option value="Remote">Remote</option>
            <option value="Speaker">Speaker</option>
            <option value="Headset">Headset</option>
            <option value="Laptop">Laptop</option>
            <option value="PC">PC</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="block mb-2 font-semibold text-gray-700">Top N:</label>
          <input
            type="number"
            className="block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
            value={top}
            onChange={(e) => setTop(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="block mb-2 font-semibold text-gray-700">Min Price:</label>
          <input
            type="number"
            className="block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="block mb-2 font-semibold text-gray-700">Max Price:</label>
          <input
            type="number"
            className="block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {products.map(product => (
          <li key={product.name} className="border p-4 rounded-lg shadow-lg bg-white">
            <Link to={`/product/${product.name}`} className="text-blue-500 hover:underline">
              <h2 className="text-2xl font-bold">{product.name}</h2>
            </Link>
            <p className="mt-2 text-gray-600">Price: ${product.price}</p>
            <p className="mt-2 text-gray-600">Discount: {product.discount * 100}%</p>
            <p className="mt-2 text-gray-600">Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
