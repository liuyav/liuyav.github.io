import React, { ElementType } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './index.module.scss';

const description = new Map();
description.set(
  '生活',
  '这个世界上你认识那么多的人，那么多人和你有关，你再怎么改变也不能让每个人都喜欢你，所以你不用在乎别人的眼光，去成为你想成为的那个人。'
);
description.set('博客', '再长的路，一步步也能走完，再短的路，不迈开双脚也无法到达。');
description.set(
  '关于',
  '给自己时间，不要焦急，一步一步来，一日一日过，请相信生命的韧性是惊人的，跟自己向上的心去合作，不要放弃对自己的爱护。——三毛'
);
description.set('联系', '所有关系变淡的原因：一个不说，一个不问或者一个问得尴尬，一个答得敷衍。');

interface props {
  title: string;
}

/**
 * 手稿组件
 * @returns ElementType
 */
const CopyWriting: ElementType = (props: props) => {
  const { title } = props;
  const location = useLocation();

  return (
    <>
      <h2 className={styles.title}>
        <span>{title}</span>
        <p>{description.get(title)}</p>
      </h2>
    </>
  );
};

export default CopyWriting;
