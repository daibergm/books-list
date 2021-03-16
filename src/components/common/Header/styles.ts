import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

// @Assets
import { Colors } from '../../../assets/';

export default StyleSheet.create({
  imageStyle: {
    width: '100%',
    height: moderateScale(150, 0.3),
    resizeMode: 'cover',
  },
  containerStyle: {
    borderBottomWidth: moderateScale(2, 0.3),
    paddingTop: 0,
    paddingBottom: 0,
    height: moderateScale(150, 0.3),
    paddingHorizontal: moderateScale(15, 0.3),
  },
  input: {
    borderWidth: moderateScale(1, 0.3),
    height: moderateScale(25, 0.3),
    color: Colors.white,
    fontSize: moderateScale(12, 0.3),
    borderRadius: moderateScale(15, 0.3),
    borderColor: Colors.white,
    paddingLeft: moderateScale(10, 0.3),
    marginTop: moderateScale(23, 0.3),
  },
  iconMargin: {
    marginTop: moderateScale(22.7, 0.3),
  },
});
