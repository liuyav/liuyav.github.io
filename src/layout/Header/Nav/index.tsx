import React, { ElementType } from 'react';
import styles from './index.module.scss';
import { NavLink } from 'react-router-dom';

const menuConfig = [
  { path: '/', name: '首页' },
  { path: '/life', name: '生活' },
  { path: '/article', name: '技术' },
  { path: '/about', name: '关于' },
  { path: '/contact', name: '联系' }
];

const Nav: ElementType = () => {
  return (
    <ul className={styles.menu}>
      {menuConfig.map((item) => {
        return (
          <li key={item.name}>
            <NavLink to={item.path}>{item.name}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Nav;
