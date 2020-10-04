import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZES } from 'services/style';

export const style = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  title: {
    fontSize: FONT_SIZES.title,
  },
  greeting: {
    fontSize: FONT_SIZES.large,
    color: COLORS.gray,
  },
});
