import React from 'react';
import { IHeader } from '../types';

interface GridHeaderProps extends IHeader {}

const GridHeader: React.FC<GridHeaderProps> = (props) => {
  const { title } = props;

  return (
    <div className="py-4">
      <p className="text-4xl">{title}</p>
    </div>
  );
};

export default GridHeader;
