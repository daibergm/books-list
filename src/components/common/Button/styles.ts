import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

// @Assets
import { Colors } from '../../../assets';

export default StyleSheet.create({
  font: {
    marginTop: moderateScale(5, 0.3),
  },
  textSecondary: {
    color: Colors.primary,
  },
});
