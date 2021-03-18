import React from 'react';
import { Input, InputProps } from 'react-native-elements';

// @Assets
import { GeneralStyles, Colors } from '../../../assets/';
import Styles from './styles';

const InputComponent = (props: InputProps) => {
  return (
    <Input
      errorStyle={[Styles.inputError, GeneralStyles.defaultFont]}
      placeholderTextColor={Colors.secondary}
      inputStyle={[
        GeneralStyles.fontSize16,
        GeneralStyles.inputStyle,
        GeneralStyles.defaultFont,
      ]}
      inputContainerStyle={GeneralStyles.inputContainerStyle}
      {...props}
    />
  );
};

export default InputComponent;
