import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/CartSlice';

const plants = {
  Flowering: [
    {
      id: 1,
      name: 'Rose',
      price: 100,
      image: 'https://via.placeholder.com/100'
    },
    {
      id: 2,
      name: 'Tulip',
      price: 120,
      image: 'https://via.placeholder.com/100'
    }
  ],

  Indoor: [
    {
      id: 3,
      name: 'Snake Plant',
      price: 200,
      image: 'https://via.placeholder.com/100'
    },
    {
      id: 4,
      name: 'Money Plant',
      price: 150,
      image: 'https://via.placeholder.com/100'
    }
  ],

  Medicinal: [
    {
      id: 5,
      name: 'Aloe Vera',
      price: 180,
      image: 'https://via.placeholder.com/100'
    },
    {
      id: 6,
      name: 'Lavender',
      price: 170,
      image: 'https://via.placeholder.com/100'
    }
  ]
};

export default function ProductList() {
  const dispatch = useDispatch();
  const [added, setAdded] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAdded([...added, plant.id]);
    setCartCount(cartCount + 1);
  };

  return (
    <div>
      <nav>
        <a href="#">Home</a> |{' '}
        <a href="#">Plants</a> |{' '}
        <a href="#">Cart ({cartCount})</a>
      </nav>

      <h1>Plants</h1>

      {Object.keys(plants).map((category) => (
        <div key={category}>
          <h2>{category}</h2>

          {plants[category].map((plant) => (
            <div key={plant.id}>
              <img
                src={plant.image}
                alt={plant.name}
                width="100"
                height="100"
              />

              <h3>{plant.name}</h3>
              <p>₹{plant.price}</p>

              <button
                disabled={added.includes(plant.id)}
                onClick={() => handleAddToCart(plant)}
              >
                {added.includes(plant.id)
                  ? 'Added'
                  : 'Add to Cart'}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
      ))}
    </div>
  );
}
