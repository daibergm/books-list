import { StyleSheet } from 'react-native';

// @Assets
import { Colors } from '../../../assets/';

export default StyleSheet.create({
  regularText: {
    color: Colors.primary,
  },
  black: {
    color: Colors.black,
  },
  white: {
    color: Colors.white,
  },
  dangerText: {
    color: Colors.danger,
  },
  underlined: {
    textDecorationLine: 'underline',
  },
  uppercase: {
    textTransform: 'uppercase',
  },
});
