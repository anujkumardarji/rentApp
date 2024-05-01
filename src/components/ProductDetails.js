import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === Number(id));

  const handleAvailability = () => {
    // Logic to check availability
    alert('This product is available!');
  };

  const handleShowOnMap = () => {
    // Logic to show location on Google Maps
    window.open(`https://www.google.com/maps/search/?api=1&query=${product.availabilityPlace}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      {product ? (
        <div className="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40 max-w-sm">
          <div className="relative">
            <img className="w-full" src={product.image} alt={product.name} />
            <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">SALE</div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{product.description}</p>
            <p><strong>Rent per day:</strong> ${product.rentPerDay}</p>
            <p><strong>Rent per month:</strong> ${product.rentPerMonth}</p>
            <p><strong>Rent per year:</strong> ${product.rentPerYear}</p>
            <p><strong>Security Deposit:</strong> ${product.securityDeposit}</p>
            <p><strong>Availability Place:</strong> {product.availabilityPlace}</p>
            <div className="flex items-center justify-between">
              <span className="font-bold text-lg">${product.price}</span>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={handleAvailability}>Check Availability</button>
            </div>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={handleShowOnMap}>Show on Map</button>
          </div>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductDetails;
