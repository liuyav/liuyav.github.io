import React, { ElementType } from 'react';
import styles from './index.module.scss';

interface Props {
  showLogo?: boolean;
}

const logoConfig = { fontSize: '26px', color: 'rgb(212 212 212)' };

/**
 * Logo 组件
 * @param props showLogo 根据showLogo属性决定是否展示logo
 * @returns ElementType
 */
const Logo: ElementType = (props: Props) => {
  const { showLogo } = props;
  return (
    <div className={styles.logo}>
      <h1>{showLogo && <span>❤</span>}Liuyav</h1>
    </div>
  );
};

export default Logo;
