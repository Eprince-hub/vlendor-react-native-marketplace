import React from 'react';
import {RenderIcon} from './';
import {IconColorProps} from './type';

export const renderProfileIcon = ({color}: IconColorProps) => {
  return <RenderIcon name="account" size={26} color={color} />;
};
