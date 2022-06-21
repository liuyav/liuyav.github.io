import React, { ElementType, useState } from 'react';
import Header from './Header';
import Sidebar from './SideBar';
import Content from './Content';
import Player from './Player';
import styles from './index.module.scss';

const NeteaseCloud: ElementType = () => {
  const [recommendList, setRecommendList] = useState<any[]>([]);
  const [curId, setCurId] = useState('');

  return (
    <div className={styles.musicWrap}>
      <Header />
      <div className={styles.musicBody}>
        <Sidebar />
        <Content list={recommendList} setCurId={setCurId} />
      </div>
      <Player curId={curId} />
    </div>
  );
};

export default NeteaseCloud;
