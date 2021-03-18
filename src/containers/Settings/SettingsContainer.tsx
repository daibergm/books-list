import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

// @Context
import { SessionContext } from '../../context';

// @Components
import { SettingsComponent } from '../../components';

const SettingsContainer = () => {
  const { onLogout } = useContext(SessionContext);
  const { i18n } = useTranslation();

  const onLogoutHandler = () => onLogout && onLogout();

  const onHandlerLanguageChange = () => {
    const { language } = i18n;
    // In this project I only use two languages
    const lng = language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(lng);
  };

  return (
    <SettingsComponent
      onChangeLanguage={onHandlerLanguageChange}
      onLogout={onLogoutHandler}
    />
  );
};

export default SettingsContainer;
