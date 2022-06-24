import React, { ElementType, useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import Module from '@/components/Module';
import { queryArticleListByKeyword, queryClassify } from '@/api/blog/index';
import { ArticleParams, Classify, Article, ArticleResponse } from '@/api/blog/types';
import { formatTime } from '@/utils/index';

const Home: ElementType = () => {
  // 生活文章分类
  const [lifeClassify, setLifeClassify] = useState<Classify[]>([]);
  // 生活文章参数
  const [lifeParams, setLifeParams] = useState<ArticleParams>({
    pageSize: 5,
    currentPage: 1,
    classify: '',
    order: 'createdAt_asc'
  });
  // 生活文章数据
  const [lifeArticle, setLifeArticle] = useState<Article[]>([]);
  // 最新最新参数
  const [articleParams, setArticleParams] = useState<ArticleParams>({
    pageSize: 3,
    currentPage: 1,
    classify: '62b16a3ca2b1b5576c7e28bf',
    order: 'createdAt_asc'
  });
  // 最新文章数据
  const [latestArticle, setLatestArticle] = useState<Article[]>([]);
  /** 轮播设置 */
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    autoplay: true
  };
  /** 轮播数据 */
  const picList = [
    {
      path: require('@/assets/1.jpg'),
      desc: '每—发奋努力的背后，必有加倍的赏赐。'
    },
    {
      path: require('@/assets/2.jpg'),
      desc: '某些时光已成过往，是我再也回不去的远方。'
    },
    {
      path: require('@/assets/3.jpg'),
      desc: '那些不在拥有的，可以不忘记但—定要放下。'
    },
    {
      path: require('@/assets/4.jpg'),
      desc: '陪伴，就是不管你需不需要，我一直都在。'
    }
  ];

  // 当前分类激活索引
  const [activeIndex, setActiveIndex] = useState(0);

  // 推荐歌单数据
  const singList = [
    {
      _id: '1',
      title: '每日歌曲推荐',
      createdAt: '2022-06-18',
      poster: require('@/assets/1.jpg')
    },
    {
      _id: '2',
      title: '2022全网超级好听的流行歌曲',
      createdAt: '2022-06-18',
      poster: require('@/assets/2.jpg')
    },
    {
      _id: '3',
      title: '今天从《把回忆拼好给你》听起|私人雷达',
      createdAt: '2022-06-18',
      poster: require('@/assets/2.jpg')
    },
    {
      _id: '4',
      title: '今天从《把回忆拼好给你》听起|私人雷达',
      createdAt: '2022-06-18',
      poster: require('@/assets/2.jpg')
    }
  ];

  // 获取文章分类
  const getArticleClassify = async () => {
    try {
      const { data } = await queryClassify({ id: '62b169eba2b1b5576c7e28b9' });
      setLifeClassify((classify: Classify[]) => {
        classify = data[0].children;
        return classify;
      });
      setLifeParams((lifeParams: ArticleParams) => {
        lifeParams.classify = data[0].children[0]._id;
        return lifeParams;
      });
      console.log('文章分类：', data);
    } catch (error) {
      console.log('查询文章分类失败：', error);
    }
  };

  // 获取文章
  const getArticles = async (params: ArticleParams) => {
    try {
      const { data } = await queryArticleListByKeyword(params);
      console.log('res', data);
      return data;
    } catch (error) {
      console.log('获取文章失败：', error);
    }
  };

  /** 切换分类 */
  const onChangeClassify = async (item: Classify, index: number) => {
    setActiveIndex(index);
    setLifeParams((lifeParams: ArticleParams) => {
      lifeParams.classify = item._id || '';
      return lifeParams;
    });
    const params = { ...lifeParams, classify: item._id };
    const lifeData: ArticleResponse | undefined = await getArticles(params);
    setLifeArticle((lifeArticle: Article[]) => {
      lifeArticle = lifeData?.list || [];
      return lifeArticle;
    });
    console.log('lifParams', lifeParams);
  };

  useEffect(() => {
    (async () => {
      getArticleClassify();
      const articleData: ArticleResponse | undefined = await getArticles(articleParams);
      setLatestArticle((latestArticle: Article[]) => {
        latestArticle = articleData?.list || [];
        return latestArticle;
      });
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (lifeClassify.length) {
        const lifeData: ArticleResponse | undefined = await getArticles(lifeParams);
        setLifeArticle((lifeArticle: Article[]) => {
          lifeArticle = lifeData?.list || [];
          return lifeArticle;
        });
      }
    })();
  }, [lifeClassify]);

  return (
    <>
      <Module>
        <Slider {...settings}>
          {picList.map((item) => {
            return (
              <div key={item.path} className={styles.picItem}>
                <img src={item.path} />
                <div>{item.desc}</div>
              </div>
            );
          })}
        </Slider>
      </Module>

      <Module title="最新发布" primary>
        {/* 最新文章 */}
        <ul className={styles.latestArticle}>
          {latestArticle.map((item) => {
            return (
              <li key={item._id}>
                <h3>{item.title}</h3>
                <div>{formatTime(item.createdAt, 'YYYY-MM-DD HH:mm:ss')}</div>
                <p title={item.description}>
                  {item.description.length <= 100 ? item.description : item.description.substring(0, 100) + ' ...'}
                </p>
                <hr />
                <Link to={`blog/detail/${item._id}`}>阅读全文</Link>
              </li>
            );
          })}
        </ul>
      </Module>

      <Module title="生活记录">
        <ul className={styles.lifeClassify}>
          {lifeClassify.map((item, index) => {
            return (
              <li key={item._id}>
                <a onClick={() => onChangeClassify(item, index)} className={index === activeIndex ? 'active' : ''}>
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className={styles.lifeArticle}>
          {lifeArticle.map((item, index) => {
            const isCenter = index === 0 || index === lifeArticle.length - 1;
            return (
              <li key={item._id}>
                {isCenter && <img src={`http://127.0.0.1:7001${item.poster}`} />}
                <span>
                  <b>{formatTime(item.createdAt, 'YYYY')}</b>
                  <i>{formatTime(item.createdAt, 'MM-DD')}</i>
                </span>

                <div>
                  <h3 title={item.title}>{item.title}</h3>
                  <p title={item.description}>
                    <Link to={`blog/detail/${item._id}`}>
                      {item.description.length <= 40 ? item.description : item.description.substring(0, 40) + ' ...'}
                    </Link>
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </Module>

      <Module title="推荐歌单" primary>
        <ul className={styles.singList}>
          {singList.map((item, index) => {
            const isCenter = index === 0 || index === latestArticle.length + 1;
            return (
              <li key={item._id}>
                <img src={item.poster} />
                <h3 title={item.title}>{item.title}</h3>
              </li>
            );
          })}
        </ul>
      </Module>
    </>
  );
};

export default Home;
