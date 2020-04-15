import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HeaderButton } from 'react-navigation-header-buttons';
import { THEME } from '../theme';

interface IProps {
  title: string;
  rest?: {
    IconComponent?: React.ReactNode;
    iconSize?: number;
    color?: string;
    background?: any;
  };
}

export const AppHeaderIcon: React.FC<IProps> = ({ title, ...rest }) => {
  const color = Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR;
  return (
    <HeaderButton
      {...rest}
      title={title}
      iconSize={24}
      color={color}
      IconComponent={Ionicons}
    />
  );
};
