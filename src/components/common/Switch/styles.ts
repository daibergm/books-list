import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Colors } from '../../../assets';

export default StyleSheet.create({
  container: {
    marginLeft: moderateScale(15, 0.3),
  },
  unSelected: {
    color: Colors.secondary,
  },
});
