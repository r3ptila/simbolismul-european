import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src='/img/eu.png' alt='Logo' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Acasă
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Lectii' className='nav-links' onClick={closeMobileMenu}>
                Lecții
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Teste' className='nav-links' onClick={closeMobileMenu}>
                Teste
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}