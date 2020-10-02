import React from 'react';
import { StyleSheet } from 'react-native';
import {
  CheckBox as NativeCheckbox,
  CheckBoxProps,
} from 'react-native-elements';
import { COLORS, FONT_SIZES } from 'services/style';

const styles = StyleSheet.create({
  textStyle: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.white,
  },
  containerStyle: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
});

export const CheckBox: React.FC<CheckBoxProps> = ({
  containerStyle,
  textStyle,
  ...props
}) => (
  <NativeCheckbox
    containerStyle={[styles.containerStyle, containerStyle]}
    textStyle={[styles.textStyle, textStyle]}
    {...props}
  />
);
