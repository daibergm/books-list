import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

// @Assets
import { Colors } from '../../assets/';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    paddingVertical: moderateScale(10, 0.3),
    paddingHorizontal: moderateScale(20, 0.3),
    borderRadius: moderateScale(5, 0.3),
  },
  detailImage: {
    width: moderateScale(70, 0.3),
    height: moderateScale(100, 0.3),
  },
  success: {
    color: Colors.success,
  },
  textGrey: {
    color: Colors.grey,
  },
  textMargin: {
    marginTop: -7,
  },
  suggestedItem: {
    paddingHorizontal: moderateScale(5, 0.3),
    marginTop: moderateScale(10, 0.3),
  },
  suggestedImage: {
    width: moderateScale(60, 0.3),
    height: moderateScale(90, 0.3),
  },
  commentImage: {
    width: moderateScale(50, 0.3),
    height: moderateScale(50, 0.3),
  },
  commentItem: {
    paddingVertical: moderateScale(5, 0.3),
  },
  commentContainer: {
    width: '85%',
  },
});
