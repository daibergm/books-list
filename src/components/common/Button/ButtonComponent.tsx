import React from 'react';
import { Button, ButtonProps } from 'react-native-elements';
import { StyleProp, ViewStyle } from 'react-native';

// @Assets
import { GeneralStyles } from '../../../assets/';

interface Props extends ButtonProps {
  secondary?: boolean;
  danger?: boolean;
}

const ButtonComponent = ({ secondary, ...otherProps }: Props) => {
  let buttonStyle: StyleProp<ViewStyle> = secondary
    ? GeneralStyles.secondaryButton
    : GeneralStyles.primaryButton;

  return (
    <Button
      titleStyle={[GeneralStyles.fontBold, GeneralStyles.fontSize18]}
      buttonStyle={[GeneralStyles.defaultButton, buttonStyle]}
      disabledStyle={GeneralStyles.disabledButton}
      {...otherProps}
    />
  );
};

export default ButtonComponent;
