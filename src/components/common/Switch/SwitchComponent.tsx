import React from 'react';
import { Switch, View, SwitchProps, Platform } from 'react-native';

// @Components
import { Text } from '../Text/';

// @Assets
import { GeneralStyles, Colors } from '../../../assets/';
import Styles from './styles';

interface Props extends SwitchProps {
  label: string;
}

const SwitchComponent = ({ label, value, ...otherProps }: Props) => {
  return (
    <View
      style={[
        GeneralStyles.flexRow,
        GeneralStyles.alignCenter,
        GeneralStyles.justifyBetween,
        Styles.container,
      ]}>
      <Text style={[GeneralStyles.fontSize16, !value && Styles.unSelected]}>
        {label}
      </Text>
      <Switch
        trackColor={{ true: Colors.secondary, false: Colors.grey }}
        thumbColor={Platform.select({
          ios: Colors.primary,
          android: !value ? Colors.white : Colors.primary,
        })}
        value={value}
        {...otherProps}
      />
    </View>
  );
};

export default SwitchComponent;
