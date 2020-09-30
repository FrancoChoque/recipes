import React from 'react';
import { Text as NativeText, StyleSheet, TextProps } from 'react-native';
import { COLORS, FONT_SIZES } from 'services/style';

const styles = StyleSheet.create({
  text: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.white,
  },
  bold: {
    color: COLORS.white,
  },
});

export interface ITextProps extends TextProps {
  bold?: boolean;
}

export const Text: React.FC<ITextProps> = ({
  children = '',
  bold,
  style,
  ...textProps
}) => {
  const boldFont = bold ? styles.bold : null;

  return (
    <NativeText {...textProps} style={[styles.text, boldFont, style]}>
      {children}
    </NativeText>
  );
};
