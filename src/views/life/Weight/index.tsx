import React, { ElementType } from 'react';
import { Divider } from 'antd';
import RecordCalendar from './RecordCalendar';
import RecordAnalysis from './RecordAnalysis';
import styles from './index.module.scss';

const Weight: ElementType = () => {
  return (
    <>
      <div className={styles.dietRecord}>
        <RecordCalendar />
        <RecordAnalysis />
      </div>
    </>
  );
};

export default Weight;
