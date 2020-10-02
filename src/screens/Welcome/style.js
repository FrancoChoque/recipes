import { StyleSheet } from 'react-native';
import { FONT_SIZES } from 'services/style';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: FONT_SIZES.extraLarge,
  },
  subTitle: {
    fontSize: FONT_SIZES.large,
  },
  button: {
    opacity: 0.75,
    width: 200,
    borderRadius: 10,
  },
});
