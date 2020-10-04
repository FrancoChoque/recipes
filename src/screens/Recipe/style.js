import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZES } from 'services/style';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: COLORS.white,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 50,
  },
  title: {
    fontSize: FONT_SIZES.veryLarge,
  },
  detailsText: {
    fontSize: FONT_SIZES.large,
  },
});
