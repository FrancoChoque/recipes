import React from 'react';
import { Text as NativeText, StyleSheet, TextProps } from 'react-native';
import { COLORS, FONT_SIZES } from 'services/style';

const styles = StyleSheet.create({
  text: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.fontPrimary,
  },
  bold: {
    color: COLORS.darkGray,
    fontWeight: 'bold',
  },
  link: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
});

export interface ITextProps extends TextProps {
  bold?: boolean;
  link?: boolean;
}

export const Text: React.FC<ITextProps> = ({
  children = '',
  bold,
  link,
  style,
  ...textProps
}) => {
  const boldFont = bold ? styles.bold : null;
  const linkFont = link ? styles.link : null;
  return (
    <NativeText {...textProps} style={[styles.text, boldFont, linkFont, style]}>
      {children}
    </NativeText>
  );
};
