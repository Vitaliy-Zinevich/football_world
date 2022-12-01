import React from 'react';
import { Link } from 'react-router-dom';

const MainTop: React.FC = () => {
  return (
    <Link to="mainNews" className="main__top">
      <div className="main__top__news-img"></div>
      <div className="main__top__news-text">«Вокруг ЧМ-2022 новый скандал»</div>
      <div className="main__top__news-time">2 часа назад</div>
    </Link>
  );
};

export default MainTop;
