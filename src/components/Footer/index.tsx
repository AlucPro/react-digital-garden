import React from 'react';
import { Link } from 'react-router-dom';
import {GlobalInfo} from '../../gloabl.model'

const Footer: React.FC = () => {
  return (
    <footer id="footer">
      <div className="footer-left">
        Copyright &copy; 2015-{new Date().getFullYear()} {GlobalInfo.Author}
      </div>
      <div className="footer-right">
        <nav>
          <ul>
            {
              GlobalInfo.navData.map((item, index) => {
                return (
                  <li key={index}>
                    {
                      item.type === 'inner'? <Link to={item.path}>{item.title}</Link> : <a target="_blank" rel="noopener" href={item.path}>{item.title}</a>
                    }
                  </li>
                )
              })
            }
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;