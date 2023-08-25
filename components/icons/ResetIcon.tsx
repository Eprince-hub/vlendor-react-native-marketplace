import React from 'react';
import {RenderIcon} from './';
import {IconColorProps} from './type';

export const renderResetIcon = ({color}: IconColorProps) => {
  return <RenderIcon name="bell" size={26} color={color} />;
};
