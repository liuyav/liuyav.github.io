import React, { ElementType, useEffect, useRef } from 'react';
import Vditor from 'Vditor';
import 'vditor/dist/index.css';
import styles from './index.module.scss';
import { Affix, Card } from 'antd';

interface Props {
  articleContentRef: any;
}

const Aside: ElementType = (props: Props) => {
  const { articleContentRef } = props;
  const articleOutlineRef = useRef<any>(null);

  console.log('ref', articleContentRef);

  useEffect(() => {
    // if (articleContentRef.current) {
    setTimeout(() => {
      Vditor.outlineRender(articleContentRef.current, articleOutlineRef.current);
    }, 300);
    // }
  }, [articleContentRef.current]);

  return (
    <>
      <Affix offsetTop={60}>
        <Card className={styles.articleOutlineBox} title="文章大纲">
          <div ref={articleOutlineRef}></div>
        </Card>
      </Affix>
    </>
  );
};

export default Aside;
