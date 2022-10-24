import React from 'react';
import styles from './Main.module.scss';

const Main: React.FC = () => {
  return (
    <div className={styles.Main}>
      <div className={styles.Main__logo}>FootballWorld</div>
    </div>
  );
};

export default Main;
