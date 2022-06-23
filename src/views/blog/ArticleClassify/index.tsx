import React, { Dispatch, memo, SetStateAction } from 'react';
import styles from './index.module.scss';
import { Classify } from '@/api/blog/types';

interface Props {
  classify: Classify[];
  curClassify: string;
  setCurClassify: (id: string) => void;
}

const ArticleClassify = memo((props: Props) => {
  const { classify, curClassify, setCurClassify } = props;
  return (
    <ul className={styles.classify}>
      {classify.map((item: Classify) => {
        return (
          <li key={item._id} className={curClassify === item._id ? styles.active : ''} onClick={() => setCurClassify(item._id)}>
            {item.label}
          </li>
        );
      })}
    </ul>
  );
});

export default ArticleClassify;
