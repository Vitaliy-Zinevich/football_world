import React from 'react';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import Matches from '../pages/Matches';
import News from '../pages/News';
import Person from '../pages/Person';
import Search from '../pages/Search';
import MainNews from '../pages/MainTop/MainNews';
import LoginPage from '../pages/Authorization/LoginPage';
import RegisterPage from '../pages/Authorization/RegisterPage';

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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
};

export default Project;
