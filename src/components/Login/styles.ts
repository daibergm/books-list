import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

// @Assets
import { Colors } from '../../assets/';

export default StyleSheet.create({
  pickerContainerStyle: {
    height: moderateScale(48, 0.3),
    paddingLeft: moderateScale(9, 0.3),
    paddingRight: moderateScale(6, 0.3),
  },
  pickerStyle: {
    backgroundColor: Colors.transparent,
    borderWidth: 0,
    borderBottomColor: Colors.primary,
    borderBottomWidth: 1,
  },
  pickerDropDown: {
    backgroundColor: Colors.white,
    marginLeft: moderateScale(9, 0.3),
  },
  pickerLabel: {
    color: Colors.primary,
    marginLeft: moderateScale(-3, 0.3),
  },
  pickerErrorLabel: {
    fontSize: moderateScale(12, 0.3),
    marginTop: 4,
    marginLeft: moderateScale(16, 0.3),
  },
  activeItem: {
    backgroundColor: Colors.black,
  },
});
