import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZES } from 'services/style';

export const styles = StyleSheet.create({
  inputContainerStyle: {
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: 15,
  },
  label: {
    paddingTop: 6,
    lineHeight: 20,
    marginBottom: 5, // necessary to overwrite native label spacing
    fontWeight: 'bold',
    color: COLORS.white,
    fontSize: FONT_SIZES.large,
  },
  inputContainer: {
    paddingLeft: 6,
    borderBottomColor: 'transparent',
  },
  errorMessageContainer: {
    marginTop: 4,
    position: 'relative',
  },
  errorStyle: {
    borderColor: COLORS.error,
    color: COLORS.error,
    fontSize: 12,
  },
  errorContainerStyle: {
    borderColor: COLORS.error,
  },
  input: {
    fontSize: 14,
    width: '100%',
  },
});
