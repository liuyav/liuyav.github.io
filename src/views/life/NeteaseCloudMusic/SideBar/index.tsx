import React, { ElementType } from 'react';
import { StarOutlined, HeartOutlined } from '@ant-design/icons';
import styles from './index.module.scss';

const SideBar: ElementType = () => {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.sidebarTop}>
        <li className="active">发现音乐</li>
        <li>视频</li>
        <li>朋友</li>
        <li>直播</li>
        <li>私人FM</li>
      </ul>
      <div className={styles.sidebarList}>
        <div>
          <span>我的音乐</span>
        </div>
        <ul>
          <li>
            <StarOutlined />
            <i>我的收藏</i>
          </li>
        </ul>
      </div>
      <div className={styles.sidebarList}>
        <div>
          <span>创建的歌单</span>
        </div>
        <ul>
          <li>
            <HeartOutlined />
            <i>我喜欢的音乐</i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
