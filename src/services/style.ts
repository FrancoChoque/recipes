import { Dimensions } from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const LATERAL_PADDING = 16;

export const COLORS = {
  white: '#FFFFFF',
  fontPrimary: '#000000',
  title: '#353535',
  primary: '#FFD706',
  lightGray: '#BBBBBB',
  gray: '#7A7A7A',
  darkGray: '#181818',
  link: '#EBFF00',
  error: '#EBFF00',
};

export const FONT_SIZES = {
  medium: 14,
  large: 18,
  veryLarge: 24,
  title: 36,
  extraLarge: 42,
};

export const defaultLateralPadding = {
  paddingLeft: LATERAL_PADDING,
  paddingRight: LATERAL_PADDING,
};
