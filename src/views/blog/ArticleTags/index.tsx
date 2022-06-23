import React, { Dispatch, memo, SetStateAction, useState } from 'react';
import styles from './index.module.scss';
import { ClassifyTag } from '@/api/blog/types';
import { Tag } from 'antd';

const { CheckableTag } = Tag;

interface Props {
  tags: ClassifyTag[];
  curTag?: string;
  setCurTag: (id: string) => void;
}

const ArticleTags = memo((props: Props) => {
  const { tags, curTag, setCurTag } = props;

  return (
    <ul className={styles.tags}>
      {tags.map((item: ClassifyTag) => {
        return (
          <li key={item._id} className={item._id === curTag ? styles.checked : ''} onClick={() => setCurTag(item._id)}>
            <Tag>{item.label}</Tag>
          </li>
        );
      })}
    </ul>
  );
});

export default ArticleTags;
