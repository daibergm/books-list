import React from 'react';
import { useTranslation } from 'react-i18next';

// @Components
import { ContainerComponent, Header } from '../../components/';

// @Containers
import { SettingsContainer } from '../../containers/';

// @constants
import { tKeys } from '../../constants/';

const SettingsScreen = () => {
  const { t } = useTranslation();

  return (
    <ContainerComponent>
      <>
        <Header title={t(tKeys.settingsLabel)} />
        <SettingsContainer />
      </>
    </ContainerComponent>
  );
};

export default SettingsScreen;
