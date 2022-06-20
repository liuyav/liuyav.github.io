import React, { ElementType } from 'react';
import Logo from '@/components/Logo';
import styles from './index.module.scss';

const Footer: ElementType = () => {
  return (
    <div className={styles.footer}>
      {/* <Logo /> */}
      <p>Made with ❤ by Liuyav - Copyright &copy;2022</p>
    </div>
  );
};

export default Footer;
