import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

// Assets
import Colors from './colors';

export default StyleSheet.create({
  flex1: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  width100: {
    width: '100%',
  },
  mHeight100: {
    maxHeight: '100%',
  },
  // Margins
  marginT30: {
    marginTop: moderateScale(30, 0.3),
  },
  // Paddings
  paddingH15: {
    paddingHorizontal: moderateScale(15, 0.3),
  },
  // Buttons
  defaultButton: {
    height: moderateScale(40, 0.3),
    borderRadius: moderateScale(20, 0.3),
  },
  primaryButton: {
    backgroundColor: Colors.primary,
  },
  disabledButton: {
    opacity: 0.65,
  },
  secondaryButton: {
    backgroundColor: Colors.white,
  },
  // Inputs
  inputStyle: {
    color: Colors.primary,
  },
  inputContainerStyle: {
    height: moderateScale(48, 0.3),
    borderBottomColor: Colors.secondary,
  },
  // Texts
  h3: {
    fontSize: moderateScale(30, 0.3),
  },
  // Fonts
  defaultFont: {
    fontFamily: 'Mount Hills',
  },
  fontSize14: {
    fontSize: moderateScale(14, 0.3),
  },
  fontSize16: {
    fontSize: moderateScale(16, 0.3),
  },
  fontSize18: {
    fontSize: moderateScale(18, 0.3),
  },
  fontSize32: {
    fontSize: moderateScale(32, 0.3),
  },
  fontBold: {
    fontWeight: 'bold',
  },
  textCenter: {
    textAlign: 'center',
  },
});
