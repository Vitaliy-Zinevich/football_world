import MainMenu from './MainMenu/MainMenu';
import MainTop from './MainTop/MainTop';

const Main: React.FC = () => {
  return (
    <div className="main">
      <MainTop />
      <MainMenu />
    </div>
  );
};

export default Main;
