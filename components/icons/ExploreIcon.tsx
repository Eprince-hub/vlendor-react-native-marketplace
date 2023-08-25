import React from 'react';
import {RenderIcon} from './';
import {IconColorProps} from './type';

export const renderExploreIcon = ({color}: IconColorProps) => {
  return <RenderIcon name="explore" size={26} color={color} />;
};
