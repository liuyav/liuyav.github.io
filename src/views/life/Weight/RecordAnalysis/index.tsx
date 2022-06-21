import React, { ElementType } from 'react';
import { Divider, Card, Col, Row, Statistic, Alert } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import styles from './index.module.scss';

const RecordAnalysis: ElementType = () => {
  return (
    <>
      <div className={styles.dietRecommend}>
        <div className="site-statistic-demo-card">
          <Row gutter={16}>
            <Col span={6}>
              <Card>
                <Statistic
                  title="体重/上月"
                  value={11.28}
                  precision={2}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<ArrowUpOutlined />}
                  suffix="%"
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card>
                <Statistic
                  title="体重/标准"
                  value={11.28}
                  precision={2}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<ArrowUpOutlined />}
                  suffix="%"
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card>
                <Statistic
                  title="指数/上月"
                  value={11.28}
                  precision={2}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<ArrowUpOutlined />}
                  suffix="%"
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card>
                <Statistic
                  title="指数/标注"
                  value={9.3}
                  precision={2}
                  valueStyle={{ color: '#cf1322' }}
                  prefix={<ArrowDownOutlined />}
                  suffix="%"
                />
              </Card>
            </Col>
          </Row>
        </div>
        <Divider orientation="left">与上月相比</Divider>
        <Alert message="风险一般：哇，标准身材，请注意保持健康作息方式。	" type="success" />
        <Divider orientation="right">与标准数据相比</Divider>
        <Alert message="偏胖，请注意饮食量、运动。	" type="warning" />
      </div>
    </>
  );
};

export default RecordAnalysis;
