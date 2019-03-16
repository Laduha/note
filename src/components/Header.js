import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
      <nav className="main-header">
          <ul>
              <li><Link to="/">Main</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/settings">Settings</Link></li>
          </ul>
      </nav>
  )
}

export default Header;
