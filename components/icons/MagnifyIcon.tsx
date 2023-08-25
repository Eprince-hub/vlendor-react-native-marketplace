import React from 'react';
import {RenderIcon} from './';
import {IconColorProps} from './type';

export const renderMagnifyIcon = ({color}: IconColorProps) => {
  return <RenderIcon name="magnify" size={26} color={color} />;
};
