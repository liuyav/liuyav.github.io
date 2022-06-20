import React, { ElementType, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import Module from '@/components/Module';

const Home: ElementType = () => {
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

  // 最新文章数据
  const latestArticle = [
    {
      _id: '1',
      title: '设计师高考真题，你能拿几分？',
      description:
        '成长本身就是一件极为痛苦的事，不仅是指当你知道自己错了而没有机会改正时的痛苦；还包括着你所要面对的一些痛苦，分离，还有你必定要经历的一些蜕变等等。所有的这些加起来构成了你我的青春。',
      createdAt: '2022-06-18'
    },
    {
      _id: '2',
      title: '5G互联网赋能、自动驾驶进程驾驶，步入智能时代',
      description:
        '那些青涩的回忆，那些天真烂漫的想法，那些让你牵动心灵的话，那些让你落泪的年华，那些曾经如花般灿烂的笑颜，那些曾经流淌温暖的画面，那些曾经在你自卑的日子里赐给你无限的勇气的人，那些在你得意的日子里陪你一起喜悦的人，那些让你知道这个世界上有许多值得你去珍惜的人…所有的这些铸成你我精彩的青春。',
      createdAt: '2022-06-18'
    },
    {
      _id: '3',
      title: 'React18正式发布，最新特性一览',
      description:
        '其实，你我的青春都一样，只是你我选择了不一样的方式停靠，有的青春在阳光下绽放，而有的青春却选择在角落里盛开。你我的青春不需要任何祭奠。也请别把人生都当作地狱。也不要虚度青春，虚度青春不是青春把我们遗忘，而是你我将它看得过于廉价。',
      createdAt: '2022-06-18'
    }
  ];

  // 生活分类数据
  const lifeClassify = [
    { _id: '1', label: '心情随笔' },
    { _id: '2', label: '健康养生' },
    { _id: '3', label: '旅行见闻' }
  ];

  // 生活文章数据
  const lifeArticle = [
    {
      _id: '1',
      title: '设计师高考真题，你能拿几分？',
      description:
        '成长本身就是一件极为痛苦的事，不仅是指当你知道自己错了而没有机会改正时的痛苦；还包括着你所要面对的一些痛苦，分离，还有你必定要经历的一些蜕变等等。所有的这些加起来构成了你我的青春。',
      createdAt: '2022-06-18',
      poster: require('@/assets/1.jpg')
    },
    {
      _id: '2',
      title: '5G互联网赋能、自动驾驶进程驾驶，步入智能时代',
      description:
        '那些青涩的回忆，那些天真烂漫的想法，那些让你牵动心灵的话，那些让你落泪的年华，那些曾经如花般灿烂的笑颜，那些曾经流淌温暖的画面，那些曾经在你自卑的日子里赐给你无限的勇气的人，那些在你得意的日子里陪你一起喜悦的人，那些让你知道这个世界上有许多值得你去珍惜的人…所有的这些铸成你我精彩的青春。',
      createdAt: '2022-06-18',
      poster: require('@/assets/2.jpg')
    },
    {
      _id: '3',
      title: '5G互联网赋能、自动驾驶进程驾驶，步入智能时代',
      description:
        '那些青涩的回忆，那些天真烂漫的想法，那些让你牵动心灵的话，那些让你落泪的年华，那些曾经如花般灿烂的笑颜，那些曾经流淌温暖的画面，那些曾经在你自卑的日子里赐给你无限的勇气的人，那些在你得意的日子里陪你一起喜悦的人，那些让你知道这个世界上有许多值得你去珍惜的人…所有的这些铸成你我精彩的青春。',
      createdAt: '2022-06-18',
      poster: require('@/assets/2.jpg')
    },
    {
      _id: '4',
      title: '5G互联网赋能、自动驾驶进程驾驶，步入智能时代',
      description:
        '那些青涩的回忆，那些天真烂漫的想法，那些让你牵动心灵的话，那些让你落泪的年华，那些曾经如花般灿烂的笑颜，那些曾经流淌温暖的画面，那些曾经在你自卑的日子里赐给你无限的勇气的人，那些在你得意的日子里陪你一起喜悦的人，那些让你知道这个世界上有许多值得你去珍惜的人…所有的这些铸成你我精彩的青春。',
      createdAt: '2022-06-18',
      poster: require('@/assets/2.jpg')
    },

    {
      _id: '5',
      title: 'React18正式发布，最新特性一览',
      description:
        '其实，你我的青春都一样，只是你我选择了不一样的方式停靠，有的青春在阳光下绽放，而有的青春却选择在角落里盛开。你我的青春不需要任何祭奠。也请别把人生都当作地狱。也不要虚度青春，虚度青春不是青春把我们遗忘，而是你我将它看得过于廉价。',
      createdAt: '2022-06-18',
      poster: require('@/assets/3.jpg')
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
                <div>{item.createdAt}</div>
                <p title={item.description}>
                  {item.description.length <= 100 ? item.description : item.description.substring(0, 100) + ' ...'}
                </p>
                <hr />
                <Link to={`article/detail/${item._id}`}>阅读全文</Link>
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
                <a onClick={() => setActiveIndex(index)} className={index === activeIndex ? 'active' : ''}>
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className={styles.lifeArticle}>
          {lifeArticle.map((item, index) => {
            const isCenter = index === 0 || index === latestArticle.length + 1;
            return (
              <li key={item._id}>
                {isCenter && <img src={item.poster} />}
                <span>
                  <b>2022</b>
                  <i>06-18</i>
                </span>

                <div>
                  <h3 title={item.title}>{item.title}</h3>
                  <p title={item.description}>
                    <Link to={`article/detail/${item._id}`}>
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
