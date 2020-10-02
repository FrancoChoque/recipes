import React from 'react';
import { Button as NativeButton, ButtonProps } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZES } from 'services/style';

const getStyles = (props) =>
  StyleSheet.create({
    container: {
      minWidth: 150,
      margin: 10,
      borderRadius: 25,
    },
    button: {
      backgroundColor: props.backgroundColor || COLORS.primary,
      height: 48,
      elevation: 0,
      shadowOpacity: 0,
      borderColor: props.borderColor
        ? props.borderColor
        : props.backgroundColor,
      borderWidth: props.borderColor ? 1 : 0,
    },
    disabledStyle: {
      backgroundColor: COLORS.darkGray,
      borderColor: COLORS.darkGray,
      borderRadius: 25,
    },
    disabledTitleStyle: {
      color: COLORS.white,
    },
    title: {
      color: props.textColor,
      fontSize: FONT_SIZES.large,
      textTransform: 'uppercase',
      fontWeight: 'bold',
    },
  });

export interface IButtonProps extends ButtonProps {
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
}

export const Button: React.FC<IButtonProps> = ({
  backgroundColor = COLORS.primary,
  borderColor = null,
  textColor = COLORS.white,
  buttonStyle,
  ...otherProps
}) => {
  const props = { backgroundColor, borderColor, textColor, ...otherProps };
  const styles = getStyles(props);

  const { containerStyle, onPress, accessibilityLabel, ...rest } = props;

  return (
    <NativeButton
      {...rest}
      containerStyle={[styles.container, containerStyle]}
      disabledStyle={styles.disabledStyle}
      disabledTitleStyle={styles.disabledTitleStyle}
      buttonStyle={[styles.button, buttonStyle]}
      titleStyle={styles.title}
      onPress={onPress}
      accessibilityLabel={accessibilityLabel ?? props.testID}
    />
  );
};
