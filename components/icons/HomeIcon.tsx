import React from 'react';
import {RenderIcon} from './';
import {IconColorProps} from './type';

export const renderHomeIcon = ({color}: IconColorProps) => {
  return <RenderIcon name="home" size={26} color={color} />;
};
