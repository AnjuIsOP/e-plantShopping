import React, { useState } from 'react';

const plants = {
  Flowering: [
    { id: 1, name: 'Rose', price: 100 },
    { id: 2, name: 'Tulip', price: 120 }
  ],
  Indoor: [
    { id: 3, name: 'Snake Plant', price: 200 },
    { id: 4, name: 'Money Plant', price: 150 }
  ],
  Medicinal: [
    { id: 5, name: 'Aloe Vera', price: 180 },
    { id: 6, name: 'Lavender', price: 170 }
  ]
};

export default function ProductList() {
  const [added, setAdded] = useState([]);
  const [count, setCount] = useState(0);

  const handleAdd = (id) => {
    setAdded([...added, id]);
    setCount(count + 1);
  };

  return (
    <div>
      <nav>
        <a href="#">Home</a> | <a href="#">Plants</a> | <a href="#">Cart ({count})</a>
      </nav>

      {Object.keys(plants).map(category => (
        <div key={category}>
          <h2>{category}</h2>

          {plants[category].map(plant => (
            <div key={plant.id}>
              <h4>{plant.name}</h4>
              <p>₹{plant.price}</p>

              <button
                disabled={added.includes(plant.id)}
                onClick={() => handleAdd(plant.id)}
              >
                {added.includes(plant.id) ? 'Added' : 'Add to Cart'}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
