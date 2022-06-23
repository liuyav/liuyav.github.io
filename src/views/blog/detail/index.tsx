import React, { ElementType } from 'react';
import Module from '@/components/Module';
import CopyWriting from '@/components/CopyWriting';

interface Props {}

const BlogDetail: ElementType = (props: Props) => {
  return (
    <Module>
      <CopyWriting />
    </Module>
  );
};

export default BlogDetail;
