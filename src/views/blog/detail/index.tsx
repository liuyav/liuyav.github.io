import React, { ElementType, useEffect, useRef, useState } from 'react';
import Module from '@/components/Module';
import Content from './Content';
import Aside from './Aside';
import styles from './index.module.scss';
import { useParams } from 'react-router-dom';
import { queryArticleDetail } from '@/api/blog';
import { Article } from '@/api/blog/types';
import { Card } from 'antd';

interface Props {}

const BlogDetail: ElementType = (props: Props) => {
  // 文章id
  const id = useParams().id || '';
  // 文章详情
  const [detail, setDetail] = useState<Article>({
    _id: '',
    title: '',
    classify: {
      _id: '',
      label: '',
      children: [],
      tags: []
    },
    tags: [],
    description: '',
    author: '',
    createdAt: '',
    liked: 0,
    comment: {
      num: 0,
      list: []
    },
    content: ''
  });
  // 文章内容引用
  const articleContentRef = useRef<HTMLDivElement | undefined>(undefined);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await queryArticleDetail({ id });
        setDetail({ ...data });
        console.log('文章详情：', data);
      } catch (error) {
        console.log('获取详情失败', error);
      }
    })();
  }, [id]);

  return (
    <>
      <Module>
        <div className={styles.detailBox}>
          <Card className={styles.contentBox}>
            <Content detail={detail} articleContentRef={articleContentRef} />
          </Card>
          <Aside articleContentRef={articleContentRef} className={styles.asideBox} />
        </div>
      </Module>
    </>
  );
};

export default BlogDetail;
