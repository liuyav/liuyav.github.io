import React, { ElementType } from 'react';
import CopyWriting from '@/components/CopyWriting';
import Module from '@/components/Module';
import Memory from './Memory';
import Weight from './Weight';
import Pet from './Pet';
import NeteaseCloudMusic from './NeteaseCloudMusic';

const Life: ElementType = () => {
  return (
    <>
      <Module>
        <CopyWriting title="生活" />
      </Module>
      <Module dir="left" title="我相信这世上，有一个温暖的人，只为我悲喜，为我阻挡人间的锋利。" primary>
        <Memory />
      </Module>
      <Module dir="right" title="世界上有两个我，一个吃货的我，一个真心想减肥的我。">
        <Weight />
      </Module>
      <Module primary>
        <Pet />
      </Module>
      <Module dir="right" title="总会出现一个人，让你感觉人间值得。——网易云热评《世界美好与你环环相扣》">
        <NeteaseCloudMusic />
      </Module>
    </>
  );
};

export default Life;
