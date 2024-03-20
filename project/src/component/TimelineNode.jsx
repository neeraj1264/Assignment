import React from 'react';
import { Tree } from 'antd';
const { TreeNode } = Tree;
import './TimelineMindmap.css';

const TimelineNode = ({ title, children, key, description}) => {
    
  return (
    <TreeNode title={<>
    <div className="title">{title}</div>
    {description && <div className="description">{description}</div>}
    </>} key={key}>
      {children}
    </TreeNode>
  );
};

export default TimelineNode;
