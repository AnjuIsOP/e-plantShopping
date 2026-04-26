import React, { useState } from 'react';

export default function CartItem() {
  const [items, setItems] = useState([
    { id: 1, name: 'Rose', price: 100, quantity: 1, image: 'rose.jpg' },
    { id: 2, name: 'Snake Plant', price: 200, quantity: 2, image: 'snake.jpg' }
  ]);

  const updateQty = (id, change) => {
    setItems(
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const remove = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>

      {items.map(item => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} width="100" />
          <h4>{item.name}</h4>
          <p>₹{item.price}</p>
          <p>Total: ₹{item.price * item.quantity}</p>

          <button onClick={() => updateQty(item.id, -1)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => updateQty(item.id, 1)}>+</button>

          <button onClick={() => remove(item.id)}>Delete</button>
        </div>
      ))}

      <h3>Total Cart Amount: ₹{total}</h3>

      <button onClick={() => alert('Coming Soon')}>Checkout</button>
      <button>Continue Shopping</button>
    </div>
  );
}
