import React from 'react';
import { Icon } from 'react-native-elements';
import { moderateScale } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';

// @Components
import { Text } from '../../components/';

// @Assets
import { Colors } from '../../assets/';
import Styles from './styles';

type TabIconProps = {
  focused: boolean;
  size: number;
  iconName: string;
};

type TabTextProps = {
  focused: boolean;
  title: string;
};

export const TabIcon = ({ size, iconName, focused }: TabIconProps) => {
  return (
    <Icon
      type={'ionicon'}
      name={iconName}
      color={focused ? Colors.primary : Colors.grey}
      size={moderateScale(size, 0.3)}
      underlayColor={Colors.transparent}
    />
  );
};

export const TabText = ({ title, focused }: TabTextProps) => {
  const { t } = useTranslation();

  return (
    <Text
      style={[Styles.tabLabel, focused ? Styles.focused : Styles.unFocused]}>
      {t(title)}
    </Text>
  );
};
