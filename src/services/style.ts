import { Dimensions } from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const LATERAL_PADDING = 16;

export const COLORS = {
  white: '#FFFFFF',
  fontPrimary: '#000000',
  title: '#353535',
  primary: '#FFD706',
  gray: '#BBBBBB',
  darkGray: '#7A7A7A',
  link: '#EBFF00',
  error: '#EBFF00',
};

export const FONT_SIZES = {
  medium: 16,
  large: 20,
  extraLarge: 42,
};

export const defaultLateralPadding = {
  paddingLeft: LATERAL_PADDING,
  paddingRight: LATERAL_PADDING,
};
