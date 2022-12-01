import { Route, Routes } from 'react-router-dom';
import ConferenceLeague from './pages_football/ConferenceLeague';
import England from './pages_football/England';
import Euro from './pages_football/Euro';
import EuropeLeague from './pages_football/EuropeLeague';
import FifaRating from './pages_football/FifaRating';
import France from './pages_football/France';
import Germany from './pages_football/Germany';
import Italy from './pages_football/Italy';
import NationalLeague from './pages_football/NationalLeague';
import Russia from './pages_football/Russia';
import Spain from './pages_football/Spain';
import Ucl from './pages_football/Ucl';
import UefaRating from './pages_football/UefaRating';
import Woman from './pages_football/Woman';
import WorldCup from './pages_football/WorldCup';

const MainMenuPath = () => {
  return (
    <div>
      <Routes>
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

export default MainMenuPath;
