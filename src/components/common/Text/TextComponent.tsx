import React from 'react';
import { TextProps, Text } from 'react-native-elements';
import { StyleProp, TextStyle } from 'react-native';

// Assets
import Styles from './styles';
import { GeneralStyles } from '../../../assets/';

export interface Props extends TextProps {
  children?: JSX.Element | string;
  /** Flag to add styles for danger text, usually for errors */
  danger?: boolean;
  /** Flag to add styles for black text */
  black?: boolean;
  /** Flag to add styles for white text */
  white?: boolean;
  /** Flag to add styles for underlined text */
  underlined?: boolean;
  /** Flag to convert children to upper case */
  upper?: boolean;
}

const TextComponent = ({
  danger,
  underlined,
  children,
  style,
  black,
  white,
  upper,
  ...otherProps
}: Props) => {
  const textStyles: StyleProp<TextStyle> = [
    Styles.regularText,
    GeneralStyles.fontSize14,
    GeneralStyles.defaultFont,
  ];
  if (danger) {
    textStyles.push(Styles.dangerText);
  }
  if (black) {
    textStyles.push(Styles.black);
  }
  if (white) {
    textStyles.push(Styles.white);
  }
  if (underlined) {
    textStyles.push(Styles.underlined);
  }
  if (upper) {
    textStyles.push(Styles.uppercase);
  }
  if (style) {
    textStyles.push(style);
  }

  return (
    <Text style={textStyles} allowFontScaling={false} {...otherProps}>
      {children}
    </Text>
  );
};
export default TextComponent;
