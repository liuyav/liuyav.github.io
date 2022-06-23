import React, { ElementType, useEffect, useState } from 'react';
import Module from '@/components/Module';
import CopyWriting from '@/components/CopyWriting';
import ArticleClassify from './ArticleClassify';
import ArticleTags from './ArticleTags';
import ArticleList from './ArticleList';

import { queryClassify, queryTags, queryArticleListByKeyword } from '@/api/blog';
import { Classify, ClassifyTag, Article, ArticleParams } from '@/api/blog/types';

import { Divider } from 'antd';
import styles from './index.module.scss';

const Blog: ElementType = () => {
  // 分类数组
  const [classify, setClassify] = useState<Classify[]>([]);
  // 标签数组
  const [tags, setTags] = useState<ClassifyTag[]>([]);
  // 列表请求参数
  const [listParams, setListParams] = useState<ArticleParams>({
    currentPage: 1,
    pageSize: 10,
    classify: '62b16a02a2b1b5576c7e28bc', // 技术文章
    tag: ''
  });
  // 列表数据
  const [list, setList] = useState<Article[]>([]);
  // 列表loading
  const [listLoading, setListLoading] = useState<boolean>(false);

  // 获取分类
  const getClassify = async () => {
    try {
      const { data } = await queryClassify({ id: listParams.classify });
      setClassify((classify) => {
        classify = data[0].children;
        return classify;
      });
      setListParams((listParams) => {
        listParams.classify = data[0].children[0]._id;
        return listParams;
      });
      setTimeout(getTags, 0);
      console.log('分类数据：', data);
    } catch (error) {
      console.log('获取分类失败：', error);
    }
  };

  // 获取标签
  const getTags = async () => {
    try {
      const { data } = await queryTags({ id: listParams.classify || '' });
      setTags((tags) => {
        tags = [...data];
        return tags;
      });
      console.log('标签数据：', data);
    } catch (error) {
      console.log('获取标签失败：', error);
    }
  };

  // 获取文章列表
  const getArticleList = async () => {
    try {
      setListLoading(true);
      const { data } = await queryArticleListByKeyword(listParams);
      setList([...data.list]);
      setListParams({ ...listParams, ...data.pageInfo });
      setListLoading(false);
      console.log('文章列表:', data.list);
    } catch (error) {
      console.log('获取文章列表失败：', error);
    }
  };

  // 设置文章分类
  const setCurClassify = (id: string) => {
    setListParams((listParams) => {
      listParams.classify = id;
      listParams.tag = '';
      return listParams;
    });
    setTimeout(() => {
      getTags();
      getArticleList();
    }, 0);
  };

  // 设置标签
  const setCurTag = (id: string) => {
    setListParams((listParams) => {
      listParams.tag = id;
      return listParams;
    });
    setTimeout(getArticleList, 0);
  };

  useEffect(() => {
    (async () => {
      await getClassify();
      await getArticleList();
    })();
  }, []);

  return (
    <>
      <Module>
        <CopyWriting />
      </Module>

      <Module primary>
        {/* 分类 */}
        <ArticleClassify classify={classify} curClassify={listParams.classify} setCurClassify={setCurClassify} />
        <Divider />
        {/* 标签 */}
        <ArticleTags tags={tags} curTag={listParams.tag} setCurTag={setCurTag} />
      </Module>

      <Module>
        <div className={styles.content}>
          {/* 列表 */}
          <ArticleList list={list} listLoading={listLoading} />
          <div className={styles.articleAside}>
            <ul className={styles.articleRecommend}></ul>
          </div>
        </div>
      </Module>
    </>
  );
};

export default Blog;
