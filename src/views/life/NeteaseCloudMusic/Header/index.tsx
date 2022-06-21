import React, { ElementType } from 'react';
import styles from './index.module.scss';

const Header: ElementType = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerLogo}>
        <span>网易云音乐</span>
      </div>
    </div>
  );
};

export default Header;
