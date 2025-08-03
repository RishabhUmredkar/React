import React from 'react'

const CatalogList = () => {
 const products = [
    { id: 1, name: 'Laptop', price: 999.99 },
    { id: 2, name: 'Smartphone', price: 799.99 },
    { id: 3, name: 'Tablet', price: 499.99 },
    { id: 4, name: 'Headphones', price: 129.99 },
    { id: 5, name: 'Smart Watch', price: 199.99 },
  ];

  return (
    <div>
      <h2>Product Catalog</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CatalogList
