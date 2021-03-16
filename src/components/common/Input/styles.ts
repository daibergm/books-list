import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

// @Assets
import { Colors } from '../../../assets/';

export default StyleSheet.create({
  inputError: {
    color: Colors.danger,
    fontSize: moderateScale(12, 0.3),
  },
});
