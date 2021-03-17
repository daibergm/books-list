import React from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

// @Components
import { ContainerComponent, Header, Text } from '../../components/';

// @constants
import { tKeys } from '../../constants/';

// @Assets
import { GeneralStyles } from '../../assets/';

const AddNewScreen = () => {
  const { t } = useTranslation();

  return (
    <ContainerComponent>
      <>
        <Header title={t(tKeys.addNewLabel)} />
        <View style={[GeneralStyles.flex1, GeneralStyles.justifyCenter]}>
          <Text style={[GeneralStyles.textCenter, GeneralStyles.fontSize18]}>
            {t(tKeys.addNewLabel)}
          </Text>
        </View>
      </>
    </ContainerComponent>
  );
};

export default AddNewScreen;
