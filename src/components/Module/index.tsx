import React, { ElementType, ReactElement } from 'react';
import { Divider } from 'antd';
import styles from './index.module.scss';
interface Props {
  children: ReactElement;
  primary?: boolean;
  title?: string;
  dir?: 'left' | 'right' | 'center' | 'undefined';
}

/**
 * 统一间距模块
 * @param props *children 模块可嵌套的子元素
 * @param props primary 是否为主模块（与次模块主要是颜色的区分）
 * @param props title 模块标题
 * @param props dir 如果此属性不为undefined，标题样式为divider，模块间距变大
 * @returns ElementType
 */
const Module: ElementType = (props: Props) => {
  const { primary = false, children, title = '', dir = 'undefined' } = props;

  const classNames = dir !== 'undefined' ? `${styles.wrap} ${styles.isDivider}` : `${styles.wrap}`;
  return (
    <div style={{ backgroundColor: primary ? styles.moduleSecond : styles.modulePrimary }}>
      <div className={classNames}>
        {title && dir !== 'undefined' ? (
          <Divider orientation={dir}>
            <h2>{title}</h2>
          </Divider>
        ) : (
          <>{title && <h2>{title}</h2>}</>
        )}
        {children}
      </div>
    </div>
  );
};

export default Module;
