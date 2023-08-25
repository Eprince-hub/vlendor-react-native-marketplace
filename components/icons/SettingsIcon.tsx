import React from 'react';
import {RenderIcon} from './';
import {IconColorProps} from './type';

export const renderSettingsIcon = ({color}: IconColorProps) => {
  return <RenderIcon name="cog" size={26} color={color} />;
};
