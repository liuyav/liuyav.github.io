import React, { ElementType, FC } from 'react';
import Logo from '@/components/Logo';
import Nav from './Nav';
import { Affix } from 'antd';
import styles from './index.module.scss';

interface Props {}

const Header: ElementType = (props: Props) => {
  return (
    <Affix offsetTop={0} className={styles.header}>
      <div className={styles.headerContent}>
        <Logo showLogo={true} />
        <Nav />
      </div>
    </Affix>
  );
};

export default Header;
