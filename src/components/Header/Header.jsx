import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <div>
      <header>
        <div className="logo">
            <h1>Puspa Food</h1>
            <p>Bekasi, South Jakarta • June 22, 2023</p>
        </div>
        <input type="search" placeholder='Search menu' />

      </header>
      <nav>
        <ul>
            <button><p>🍔Burger</p></button>
            <button><p>🍕Pizza</p></button>
            <button><p>🍟French fries</p></button>
            <button><p>☕️Soda</p></button>
            <button><p>🍗Chicken</p></button>
            <button><p>🧃Juice</p></button>
        </ul>
      </nav>
      
    </div>
  );
}

export default Header;
