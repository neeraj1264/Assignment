import React from 'react';
import { Tree } from 'antd';
const { TreeNode } = Tree;
import './TimelineMindmap.css';

const TimelineNode = ({ title, children, key, }) => {
    
  return (
    <TreeNode title={<div className="title">{title}</div>} key={key}>
      {children}
    </TreeNode>
  );
};

export default TimelineNode;
