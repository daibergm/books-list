import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

export default StyleSheet.create({
  alertContainer: {
    height: moderateScale(63, 0.3),
    alignItems: 'center',
    paddingTop: 0,
    paddingBottom: 0,
  },
});
