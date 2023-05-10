import React from 'react'

export const CartItems = () => {
  return (
    <div>
      


        
    </div>
  )
}






// import React, { useState } from 'react';

// const Product = ({ id, name, price, addToCart }) => {
//   const handleAddToCart = () => {
//     addToCart({ id, name, price });
//   };

//   return (
//     <div>
//       <h3>{name}</h3>
//       <p>Price: ${price}</p>
//       <button onClick={handleAddToCart}>Add to Cart</button>
//     </div>
//   );
// };

// const Cart = ({ cartItems }) => {
//   return (
//     <div>
//       <h2>Cart</h2>
//       {cartItems.map((item) => (
//         <div key={item.id}>
//           <p>{item.name}</p>
//           <p>Price: ${item.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// const App = () => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item) => {
//     setCartItems([...cartItems, item]);
//   };

//   return (
//     <div>
//       <h1>Products</h1>
//       <Product id={1} name="Product 1" price={10} addToCart={addToCart} />
//       <Product id={2} name="Product 2" price={15} addToCart={addToCart} />
//       <Product id={3} name="Product 3" price={20} addToCart={addToCart} />

//       <Cart cartItems={cartItems} />
//     </div>
//   );
// };

// export default App;
