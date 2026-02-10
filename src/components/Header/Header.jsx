import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then(res => res.json())
      .then(json => setData(json.recipes));
  }, []);

  return (
    <div className="section">
      <header className="header">
        <div className="logo">
          <h1 className="section_title">Puspa Food</h1>
          <p>Bekasi, South Jakarta • June 22, 2023</p>
        </div>
        <input type="search" placeholder="🔍 Search menu" className="search" />
      </header>

      <nav className="nav">
        <div className="menu">
          <button>🍔 Burger</button>
          <button>🍕 Pizza</button>
          <button>🍟 Fries</button>
          <button>☕️ Soda</button>
          <button>🍗 Chicken</button>
          <button>🧃 Juice</button>
        </div>
      </nav>

      <div className="carts">
        {data.map((item,index) => (
          <div key={index} className="card">
            <img src={item.image} alt={item.name} className="image" />
            <h3 className="card_title">{item.name}</h3>
            <p>Rating: 2 {item.rating}</p>
            <p>Calories: {item.caloriesPerServing} kcal</p>
            <button className="button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;