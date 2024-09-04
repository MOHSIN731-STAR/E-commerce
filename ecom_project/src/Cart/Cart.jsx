// src/Cart.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "./cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const totalValue = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="border m-16 shadow">
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  {item.title}
                  <br /> Quantity: {item.quantity}
                  <br /> Price: ${item.price.toFixed(2)}
                  <br />
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="bg-black text-white p-2 rounded"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <h2>Total Value: ${totalValue.toFixed(2)}</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
