import React, { ElementType } from 'react';
import styles from './index.module.scss';
import { RightOutlined, CaretRightOutlined, PlayCircleFilled } from '@ant-design/icons';

import { convertUnit } from '@/utils';

interface Props {
  list: string[];
  setCurId: (id: React.SetStateAction<string>) => void;
}

const Content: ElementType = (props: Props) => {
  const { list, setCurId } = props;
  return (
    <div className={styles.content}>
      <ul className={styles.contentHeader}>
        <li className="active">个性推荐</li>
        <li>歌单</li>
        <li>主播电台</li>
        <li>排行榜</li>
        <li>歌手</li>
        <li>最新音乐</li>
      </ul>
      <div className={styles.songSheetRecommend}>
        <h3>
          <span>推荐歌单</span>
          <RightOutlined />
        </h3>
        <ul>
          {list.map((item: any) => {
            return (
              <li key={item.id}>
                <div>
                  <img src={item.picUrl} alt="" />
                  <b>
                    <CaretRightOutlined />
                    {convertUnit(item.playCount)}
                  </b>
                  <i onClick={() => setCurId(item.id)}>
                    <PlayCircleFilled />
                  </i>
                </div>
                <p>{item.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Content;
