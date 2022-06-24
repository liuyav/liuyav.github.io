import { Article } from '@/api/blog/types';
import React, { ElementType } from 'react';
import styles from './index.module.scss';
import 'vditor/dist/index.css';
import Vditor from 'vditor';
import { Tag } from 'antd';
import { UserOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { formatTime } from '@/utils/index';
import { ClassifyTag } from '@/api/blog/types';

interface Props {
  detail: Article;
  articleContentRef: any;
}

const Content: ElementType = (props: Props) => {
  const { detail, articleContentRef } = props;

  React.useEffect(() => {
    Vditor.preview(articleContentRef.current, detail.content, {
      hljs: {
        enable: true,
        style: 'native',
        lineNumber: true
      },
      mode: 'light',
      markdown: {
        codeBlockPreview: true,
        toc: true,
        listStyle: true
      },
      speech: {
        enable: true
      },
      anchor: 1
    });
  });

  return (
    <div className={styles.contentBox}>
      <h1>{detail.title}</h1>
      <div className={styles.tools}>
        <span>
          <UserOutlined />
          作者：
          {detail.author}
        </span>
        <span>
          <ClockCircleOutlined />
          创建时间：{formatTime(detail.createdAt, 'YYYY-MM-DD HH:mm:ss')}
        </span>
        <span>
          <UserOutlined />
          分类：
          {detail.classify.label}
        </span>
        <ul className={styles.tags}>
          {detail.tags.map((childItem: ClassifyTag) => {
            return (
              <li key={childItem._id}>
                <Tag>{childItem.label}</Tag>
              </li>
            );
          })}
        </ul>
      </div>
      <div id="vditor" className={`vditor ${styles.vditor}`} ref={articleContentRef}></div>
    </div>
  );
};

export default Content;
