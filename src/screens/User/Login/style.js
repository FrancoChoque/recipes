import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZES } from 'services/style';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  formContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  title: {
    fontSize: FONT_SIZES.extraLarge,
    color: COLORS.white,
  },
  button: {
    opacity: 0.75,
    width: '100%',
  },
});
