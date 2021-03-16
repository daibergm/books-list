import React from 'react';
import { Input, InputProps } from 'react-native-elements';

// @Assets
import { GeneralStyles, Colors } from '../../../assets/';
import Styles from './styles';

const InputComponent = (props: InputProps) => {
  return (
    <Input
      errorStyle={Styles.inputError}
      placeholderTextColor={Colors.secondary}
      inputStyle={[GeneralStyles.fontSize16, GeneralStyles.inputStyle]}
      inputContainerStyle={GeneralStyles.inputContainerStyle}
      {...props}
    />
  );
};

export default InputComponent;
