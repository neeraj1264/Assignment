import React from 'react';
import { Tree } from 'antd';
import TimelineNode from './TimelineNode';
import './TimelineMindmap.css';

const { TreeNode } = Tree;

const TimelineMindmap = ({ data }) => {
    const renderTimelineNodes = (data) => {
        return data.map((item) => {
          if (item.children) {
            return (
              <TimelineNode
                title={item.title}
                description={item.description} // Pass the description prop here
                key={item.key}
              >
                {renderTimelineNodes(item.children)}
              </TimelineNode>
            );
          }
          return (
            <TimelineNode
              title={item.title}
              description={item.description} // Pass the description prop here
              key={item.key}
            />
          );
        });
      };
      

  return (
    <Tree showLine defaultExpandedKeys={['1']} treeData={data}>
      {renderTimelineNodes(data)}
    </Tree>
  );
};

export default TimelineMindmap;
