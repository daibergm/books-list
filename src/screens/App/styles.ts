import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

// @Assets
import { Colors } from '../../assets/';

export default StyleSheet.create({
  tabLabel: {
    fontSize: moderateScale(10, 0.3),
  },
  focused: {
    color: Colors.primary,
  },
  unFocused: {
    color: Colors.grey,
  },
});
