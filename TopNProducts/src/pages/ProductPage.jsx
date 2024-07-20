import React from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const { name } = useParams();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Product Page</h1>
      <p className="text-2xl">Product Name: {name}</p>
    </div>
  );
};

export default ProductPage;
