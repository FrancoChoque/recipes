import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,.6)',
  },
});

export const Overlay: React.FC<ViewProps> = () => (
  <View style={styles.overlay} />
);
