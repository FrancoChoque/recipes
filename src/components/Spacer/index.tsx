import React from 'react';
import { View } from 'react-native';
import { SCREEN_WIDTH } from 'services/style';

const getSpacerStyle = (height: number, backgroundColor: string) => ({
  width: SCREEN_WIDTH,
  height,
  backgroundColor,
});

interface ISpacerProps {
  height?: number;
  backgroundColor?: string;
}

export const Spacer: React.FC<ISpacerProps> = ({
  height = 8,
  backgroundColor = 'transparent',
}) => <View style={[getSpacerStyle(height, backgroundColor)]} />;
