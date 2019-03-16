import React from 'react';
import {Link} from 'react-router-dom';
import  "./Header.css"

function Header() {
  return (
      <header>
          <nav className="main-header">
          <ul>
              <li><Link to="/">Main</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/settings">Settings</Link></li>
          </ul>
      </nav>
    </header>
  )
}

export default Header;
