import React from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

// @Components
import { Button, Text } from '../../components/common/';

// @Assets
import { GeneralStyles } from '../../assets';

// @constants
import { tKeys } from '../../constants';

type Props = {
  onLogout: () => void;
  onChangeLanguage: () => void;
};

const SettingsComponent = ({ onLogout, onChangeLanguage }: Props) => {
  const { t } = useTranslation();

  return (
    <View
      style={[
        GeneralStyles.flex1,
        GeneralStyles.justifyCenter,
        GeneralStyles.paddingH15,
      ]}>
      <Button
        onPress={onLogout}
        secondary
        title={t(tKeys.logoutBtn).toUpperCase()}
      />
      <Text
        style={[
          GeneralStyles.fontSize16,
          GeneralStyles.textCenter,
          GeneralStyles.marginT15,
        ]}>
        {t(tKeys.languageLabel)}
      </Text>
      <Button
        onPress={onChangeLanguage}
        title={t(tKeys.languageBtn).toUpperCase()}
      />
    </View>
  );
};

export default SettingsComponent;
