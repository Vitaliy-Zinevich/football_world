import React from 'react';
import styles from './Modal.module.scss';

const Modal: React.FC = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal__content}></div>
    </div>
  );
};

export default Modal;
