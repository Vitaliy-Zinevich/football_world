import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header__wrapper">
        <Link to="/" className="header__wrapper__logo">
          FootballWorld
        </Link>
        <Link to="/news" className="header__wrapper__news">
          News
        </Link>
        <Link to="/matches" className="header__wrapper__matches">
          Matches
        </Link>
        <div className="header__wrapper__wrapper">
          <Link to="/search" className="header__wrapper__item1">
            <span className="material-symbols-outlined">search</span>
          </Link>
          <Link to="/person" className="header__wrapper__item2">
            <span className="material-symbols-outlined">person</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
