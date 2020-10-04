import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZES } from 'services/style';

export const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 0,
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    borderRadius: 15,
  },
});

export const getDimensions = (small) =>
  small
    ? {
        width: 120,
        height: 120,
      }
    : {
        width: 182,
        height: 300,
      };

export const getImageDimensions = (small) =>
  small
    ? {
        width: 120,
        height: 100,
      }
    : {
        width: 182,
        height: 280,
      };
