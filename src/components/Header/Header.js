import React from 'react';
import {Link} from 'react-router-dom';
import  "./Header.css"

function Header() {
  return (
      <header className="main-header">
          <nav>
          <ul>
              <li><Link to="/">MAIN</Link></li>
              <li><Link to="/about">ABOUT</Link></li>
              <li><Link to="/settings">SETTINGS</Link></li>
          </ul>
      </nav>
    </header>
  )
}

export default Header;
