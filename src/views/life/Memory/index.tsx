import React, { ElementType } from 'react';
import { Link } from 'react-router-dom';
import { Timeline, Divider, Image } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

import styles from './index.module.scss';

const Memory: ElementType = () => {
  return (
    <>
      <div className={styles.timeRecord}>
        <Timeline pending="Recording..." reverse={true}>
          <Timeline.Item>2015-09-01 Create a services site</Timeline.Item>
          <Timeline.Item color="green">2015-09-01 Solve initial network problems</Timeline.Item>
          <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
            2015-09-01 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </Timeline.Item>
          <Timeline.Item color="red">2015-09-01 Network problems being solved</Timeline.Item>
          <Timeline.Item>
            <Link to={'/article/detail/111'}>2015-09-01 第一次见面</Link>
          </Timeline.Item>
          <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
            <Link to={'/article/detail/111'}>2021-08-31 与她相识</Link>
          </Timeline.Item>
        </Timeline>
        <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
      </div>
    </>
  );
};

export default Memory;
