import React, { ElementType } from 'react';
import { Divider } from 'antd';

const Pet: ElementType = () => {
  return (
    <>
      <Divider orientation="left">
        <h2 className="title">有两种忘记生活烦恼的方式：音乐和猫。——阿尔伯特·施瓦茨</h2>
      </Divider>
    </>
  );
};

export default Pet;
