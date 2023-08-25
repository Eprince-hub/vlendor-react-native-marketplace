import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FixIcon from 'react-native-vector-icons/MaterialIcons';

export type RenderIconProps = {
  name: string;
  size: number;
  color: string;
};

export const RenderIcon = ({name, size, color}: RenderIconProps) => {
  if (name === 'explore') {
    return <FixIcon name={name} size={size} color={color} />;
  }
  return <Icon name={name} size={size} color={color} />;
};
