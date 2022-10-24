import React from 'react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.Header__logo}>FootballWorld</div>
      <div className={styles.Header__news}>News</div>
      <div className={styles.Header__matches}>Matches</div>
      <div className={styles.Header__wrapper}>
        <div className={styles.Header__item1}>
          <span className="material-symbols-outlined">search</span>
        </div>
        <div className={styles.Header__item2}>
          <span className="material-symbols-outlined">person</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
