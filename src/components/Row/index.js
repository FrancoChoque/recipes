import React from 'react';
import { StyleSheet, View } from 'react-native';
import { defaultLateralPadding, SCREEN_WIDTH } from 'services/style';

const getRowStyle = (
  justifyContent,
  marginTop,
  marginBottom,
  backgroundColor,
) =>
  StyleSheet.create({
    row: {
      width: SCREEN_WIDTH,
      flexDirection: 'row',
      justifyContent,
      flexWrap: 'wrap',
      marginTop,
      marginBottom,
      backgroundColor,
      alignItems: 'center',
      ...defaultLateralPadding,
    },
  });

export const Row = ({
  children,
  justifyContent,
  marginTop,
  marginBottom,
  backgroundColor,
  style,
}) => (
  <View
    style={[
      getRowStyle(justifyContent, marginTop, marginBottom, backgroundColor).row,
      style,
    ]}>
    {children}
  </View>
);

Row.defaultProps = {
  justifyContent: 'space-between',
  marginTop: 0,
  marginBottom: 0,
  backgroundColor: 'transparent',
  children: <View />,
  style: {},
};
