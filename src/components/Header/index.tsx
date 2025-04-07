import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { GlobalInfo } from '../../gloabl.model';



const Header: React.FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header id="header">
      <Link className="u-url u-uid" to="/">
        <img id="logo" alt="" className="u-logo" src="/public/logo.png" />
        <div id="title">
          <h1 className="p-name">{GlobalInfo.Author}</h1>
        </div>
      </Link>
      <div id="nav">
        <ul className={isMenuOpen ? 'responsive' : ''}>
          <li className="icon" onClick={toggleMenu}>
            <a href="#" aria-label="Menu">
              <FontAwesomeIcon icon={faBars} size="2x" />
            </a>
          </li>
          {
            GlobalInfo.navData.map((item, index) => {
              return (
                <li key={index}>
                  {
                    item.type === 'inner' ? <Link to={item.path}>{item.title}</Link> : <a target="_blank" rel="noopener" href={item.path}>{item.title}</a>
                  }
                </li>
              )
            })
          }
        </ul>
      </div>
    </header>
  );
};

export default Header;