import React from 'react';
import {
  Input as NativeElementsInput,
  InputProps,
} from 'react-native-elements';
import { styles } from './style';

export const Input: React.FC<InputProps> = (props) => (
  <NativeElementsInput
    {...props}
    labelStyle={styles.label}
    inputContainerStyle={[
      styles.inputContainerStyle,
      props.inputContainerStyle,
    ]}
  />
);
