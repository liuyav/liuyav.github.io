import React, { ElementType, useEffect, useState } from 'react';
import styles from './index.module.scss';
import { StepBackwardOutlined, PlayCircleOutlined, StepForwardOutlined } from '@ant-design/icons';

interface Props {
  curId: string;
}

const scrollTo = (element: any, to: any, duration: any) => {
  console.log(element.scrollTop, to, duration);

  if (duration <= 0) return;
  var difference = to - element.scrollTop;
  var perTick = (difference / duration) * 10;

  setTimeout(function () {
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop === to) return;
    scrollTo(element, to, duration - 10);
  }, 10);
};

const Player: ElementType = (props: Props) => {
  const { curId } = props;
  const [curUrl, setCurUrl] = useState('');

  return (
    <div className={styles.playerWrap}>
      <div className={styles.playerContainer}>
        <div className={styles.playerControl}>
          <StepBackwardOutlined />
          <PlayCircleOutlined />
          <StepForwardOutlined />
        </div>
      </div>
      <audio id="audio" src={curUrl} autoPlay />
    </div>
  );
};

export default Player;
