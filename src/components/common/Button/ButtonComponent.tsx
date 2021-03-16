import React from 'react';
import { Button, ButtonProps } from 'react-native-elements';
import { StyleProp, ViewStyle } from 'react-native';

// @Assets
import { GeneralStyles } from '../../../assets/';
import Style from './styles';

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
      titleStyle={[
        GeneralStyles.fontSize18,
        Style.font,
        GeneralStyles.defaultFont,
      ]}
      buttonStyle={[GeneralStyles.defaultButton, buttonStyle]}
      disabledStyle={GeneralStyles.disabledButton}
      {...otherProps}
    />
  );
};

export default ButtonComponent;
