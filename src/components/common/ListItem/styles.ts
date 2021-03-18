import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

// @Assets
import { Colors } from '../../../assets/';

export default StyleSheet.create({
  item: {
    backgroundColor: Colors.white,
    paddingVertical: moderateScale(10, 0.3),
    paddingHorizontal: moderateScale(20, 0.3),
    marginVertical: moderateScale(7.5, 0.3),
    marginHorizontal: moderateScale(15, 0.3),
    borderRadius: moderateScale(5, 0.3),
  },
  image: {
    width: moderateScale(50, 0.3),
    height: moderateScale(60, 0.3),
  },
  descriptionContainer: {
    paddingHorizontal: moderateScale(10, 0.3),
  },
  description: {
    opacity: 0.5,
  },
});
