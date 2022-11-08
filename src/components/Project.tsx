import React from 'react';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import Matches from '../pages/Matches';
import News from '../pages/News';
import Person from '../pages/Person';
import Search from '../pages/Search';
import MainNews from '../pages/Main/MainNews';

const Project: React.FC = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/news" element={<News />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/search" element={<Search />} />
        <Route path="/person" element={<Person />} />
        <Route path="/mainNews" element={<MainNews />} />
      </Routes>
    </div>
  );
};

export default Project;
