import React from 'react';
import { SafeAreaView } from 'react-native';

// @Assets
import { GeneralStyles } from '../../../assets/';

interface Props {
  children: JSX.Element;
}

const ContainerComponent = ({ children }: Props) => (
  <SafeAreaView style={GeneralStyles.flex1}>{children}</SafeAreaView>
);

export default ContainerComponent;
