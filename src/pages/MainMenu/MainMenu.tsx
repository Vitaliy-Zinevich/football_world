import { Link } from 'react-router-dom';

const MainMenu = () => {
  return (
    <div className="main__menu">
      <Link to="/world_cup" className="main__menu__item">
        ЧМ-2022
      </Link>
      <Link to="/euro" className="main__menu__item">
        Евро-2024
      </Link>
      <Link to="/nations_league" className="main__menu__item">
        Лига Наций
      </Link>
      <Link to="/ucl" className="main__menu__item">
        Лига Чемпионов
      </Link>
      <Link to="/europe_league" className="main__menu__item">
        Лига Европы
      </Link>
      <Link to="/conference_league" className="main__menu__item">
        Лига Конференций
      </Link>
      <Link to="/russia" className="main__menu__item">
        РПЛ
      </Link>
      <Link to="/england" className="main__menu__item">
        АПЛ
      </Link>
      <Link to="/italy" className="main__menu__item">
        Серия А
      </Link>
      <Link to="/spain" className="main__menu__item">
        Ла Лига
      </Link>
      <Link to="/france" className="main__menu__item">
        Лига 1
      </Link>
      <Link to="/germany" className="main__menu__item">
        Бундеслига
      </Link>
      <Link to="/women" className="main__menu__item">
        Женский футбол
      </Link>
      <Link to="/uefa_rating" className="main__menu__item">
        Рейтинг УЕФА
      </Link>
      <Link to="/fifa_rating" className="main__menu__item">
        Рейтинг ФИФА
      </Link>
    </div>
  );
};

export default MainMenu;
