// data/exampleData.js

const productData = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 }
  ];
  
  const userData = [
    { id: 1, name: 'Alice', email: 'alice@example.com', address: '123 Main St', number: '123-456-7890' },
    { id: 2, name: 'Bob', email: 'bob@example.com', address: '456 Elm St', number: '234-567-8901' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', address: '789 Oak St', number: '345-678-9012' }
  ];
  
  const userReview = [
    { id: 1, userId: 1, review: 'Great product!' },
    { id: 2, userId: 2, review: 'Satisfactory experience.' },
    { id: 3, userId: 3, review: 'Could be better.' }
  ];
  
  module.exports = {
    productData,
    userData,
    userReview
  };
  