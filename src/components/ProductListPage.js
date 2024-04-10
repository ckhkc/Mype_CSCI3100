import React from 'react';

import "../styles/ProductListPage.css";


const ProductListPage = ({ products }) => {
  return (
    <div className="product-list-container">
      <h2 className="product-list-header">Uploaded Products</h2>
      <div>
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price"><strong>Price:</strong> {product.price}</p>
            <p className="product-hashtag"><strong>Hash Tag:</strong> {product.hashTag}</p>
            <p className="product-description"><strong>Detailed Description:</strong> {product.detailedDescription}</p>
            <p className="product-description"><strong>Short Description:</strong> {product.shortDescription}</p>
            
            {/* Display the cover image if available */}
            {product.coverImage && (
              <div>
                <strong>Cover Image:</strong><br />
                <img 
                  src={URL.createObjectURL(product.coverImage)} 
                  alt="Cover" 
                  className="product-cover-image" 
                />
              </div>
            )}
            
            {/* Display the description file if available */}
            {product.descriptionFile && (
              <div className="product-description-file">
                <strong>Description File:</strong><br />
                <a 
                  href={URL.createObjectURL(product.descriptionFile)} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Open Description File
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListPage
