/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import type { MBPostProps } from '@lekoarts/gatsby-theme-minimal-blog/src/components/post';
import Comments from './comments';

const PostFooter = ({ post }: MBPostProps) => {
  return <Comments repo='overtae/tae-log' theme={'preferred-color-scheme'} />;
};

export default PostFooter;
