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
  label: {
    color: Colors.white,
  },
  // Fonts
  fontSize16: {
    fontSize: moderateScale(16, 0.3),
  },
  fontBold: {
    fontWeight: 'bold',
  },
  textCenter: {
    textAlign: 'center',
  },
});
