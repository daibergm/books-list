import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

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
  title: {
    marginTop: moderateScale(7, 0.3),
  },
});
