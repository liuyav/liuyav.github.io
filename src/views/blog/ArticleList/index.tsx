import React, { ElementType, memo } from 'react';
import styles from './index.module.scss';
import { Card, Tag } from 'antd';
import { UserOutlined, ClockCircleOutlined, HeartOutlined } from '@ant-design/icons';

import { Article, ClassifyTag } from '@/api/blog/types';
import { formatTime } from '@/utils/index';
import { Link } from 'react-router-dom';

interface Props {
  list: Article[];
  listLoading: boolean;
}

const ArticleList: ElementType = memo((props: Props) => {
  const { list, listLoading } = props;
  return (
    <ul className={styles.articleList}>
      {list.map((item: Article) => {
        return (
          <li key={item._id}>
            <Card loading={listLoading}>
              <h3>
                <Link to={`/blog/detail/${item._id}`}>{item.title}</Link>
              </h3>
              <div className={styles.tools}>
                <span>
                  <ClockCircleOutlined />
                  创建时间：{formatTime(item.createdAt, 'YYYY-MM-DD HH:mm:ss')}
                </span>
                <span>
                  <UserOutlined />
                  分类：
                  {item.classify.label}
                </span>
                <ul className={styles.tags}>
                  {item.tags.map((childItem: ClassifyTag) => {
                    return (
                      <li key={childItem._id}>
                        <Tag>{childItem.label}</Tag>
                      </li>
                    );
                  })}
                </ul>
                <span>
                  <UserOutlined />
                  作者：
                  {item.author}
                </span>
                <span>
                  <HeartOutlined />
                  点赞：{item.liked}
                </span>
                <span>
                  <HeartOutlined />
                  评论数：{item.comment.num}
                </span>
              </div>
              <p>
                <Link to={`/blog/detail/${item._id}`}>{item.description}</Link>
              </p>
            </Card>
          </li>
        );
      })}
    </ul>
  );
});

export default ArticleList;
