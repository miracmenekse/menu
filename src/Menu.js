import React, { useState } from 'react';

const Menu = () => {
  const [menu, setMenu] = useState(null);
  
  const handleClick = (e) => {
    e.preventDefault();
    setMenu(menu === e.target.id ? null : e.target.id);
  }
  
  return (
    <div>
      <ul>
        <li><a href="#" id="menu1" onClick={handleClick}>Menu 1</a></li>
        <li><a href="#" id="menu2" onClick={handleClick}>Menu 2</a></li>
        <li><a href="#" id="menu3" onClick={handleClick}>Menu 3</a></li>
      </ul>
      {menu === "menu1" && 
        <ul>
          <li><a href="#">Submenu 1</a></li>
          <li><a href="#">Submenu 2</a></li>
          <li><a href="#">Submenu 3</a></li>
        </ul>
      }
      {menu === "menu2" && 
        <ul>
          <li><a href="#">Submenu 4</a></li>
          <li><a href="#">Submenu 5</a></li>
          <li><a href="#">Submenu 6</a></li>
        </ul>
      }
      {menu === "menu3" && 
        <ul>
          <li><a href="#">Submenu 7</a></li>
          <li><a href="#">Submenu 8</a></li>
          <li><a href="#">Submenu 9</a></li>
        </ul>
      }
    </div>
  );
}

export default Menu;