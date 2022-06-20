import React, { ElementType, ReactElement } from 'react';
import styles from './index.module.scss';

interface Props {
  children: ReactElement;
  primary?: boolean;
  title?: string;
}

/**
 * 统一间距模块
 * @param props *children 模块可嵌套的子元素
 * @param props primary 是否为主模块（与次模块主要是颜色的区分）
 * @returns ElementType
 */
const Module: ElementType = (props: Props) => {
  const { primary = false, children, title = '' } = props;
  return (
    <div style={{ backgroundColor: primary ? styles.moduleColor : styles.bgColor }}>
      <div className={styles.wrap}>
        {title && <h2>{title}</h2>}
        {children}
      </div>
    </div>
  );
};

export default Module;
