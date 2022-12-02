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
import ConferenceLeague from 'pages/MainMenu/pages_football/ConferenceLeague';
import England from 'pages/MainMenu/pages_football/England';
import EuropeLeague from 'pages/MainMenu/pages_football/EuropeLeague';
import Germany from 'pages/MainMenu/pages_football/Germany';
import Italy from 'pages/MainMenu/pages_football/Italy';
import NationalLeague from 'pages/MainMenu/pages_football/NationalLeague';
import Russia from 'pages/MainMenu/pages_football/Russia';
import Spain from 'pages/MainMenu/pages_football/Spain';
import Ucl from 'pages/MainMenu/pages_football/Ucl';
import UefaRating from 'pages/MainMenu/pages_football/UefaRating';
import Woman from 'pages/MainMenu/pages_football/Woman';
import WorldCup from 'pages/MainMenu/pages_football/WorldCup';
import Euro from 'pages/MainMenu/pages_football/Euro';
import France from 'pages/MainMenu/pages_football/France';
import FifaRating from 'pages/MainMenu/pages_football/FifaRating';

const Project: React.FC = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/news" element={<News />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/search" element={<Search />} />
        <Route path="/person" element={<Person />} />
        <Route path="/mainNews" element={<MainNews />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/world_cup" element={<WorldCup />} />
        <Route path="/euro" element={<Euro />} />
        <Route path="/nations_league" element={<NationalLeague />} />
        <Route path="/ucl" element={<Ucl />} />
        <Route path="/europe_league" element={<EuropeLeague />} />
        <Route path="/conference_league" element={<ConferenceLeague />} />
        <Route path="/russia" element={<Russia />} />
        <Route path="/england" element={<England />} />
        <Route path="/italy" element={<Italy />} />
        <Route path="/spain" element={<Spain />} />
        <Route path="/france" element={<France />} />
        <Route path="/germany" element={<Germany />} />
        <Route path="/women" element={<Woman />} />
        <Route path="/uefa_rating" element={<UefaRating />} />
        <Route path="/fifa_rating" element={<FifaRating />} />
      </Routes>
    </div>
  );
};

export default Project;
