import { StyleSheet } from 'react-native';
import { COLORS } from 'services/style';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    flexDirection: 'column',
    paddingTop: 20,
    paddingEnd: 10,
    paddingRight: 20,
  },
});
