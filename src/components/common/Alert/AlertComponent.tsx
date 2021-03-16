import React, { useEffect, useContext } from 'react';
import FlashMessage, {
  showMessage,
  hideMessage,
  MessageType,
} from 'react-native-flash-message';
import { useTranslation } from 'react-i18next';

// @Assets
import { GeneralStyles, Colors } from '../../../assets/';
import Styles from './styles';

// @Context
import { SessionContext } from '../../../context/';

const AlertComponent = () => {
  const { hasAlert, alertCode, alertType, onHideAlert } = useContext(
    SessionContext,
  );
  const { t } = useTranslation();

  useEffect(() => {
    const getBC = (): string => {
      switch (alertType) {
        case 'danger': {
          return Colors.danger;
        }

        case 'success': {
          return Colors.secondary;
        }

        default: {
          return Colors.grey;
        }
      }
    };

    if (hasAlert) {
      showMessage({
        message: '',
        description: t(alertCode as string),
        type: alertType as MessageType,
        autoHide: false,
        backgroundColor: getBC(),
      });
    } else {
      hideMessage();
    }
  }, [alertCode, alertType, hasAlert, t]);

  const onHandlerPress = () => {
    onHideAlert && onHideAlert();
    hideMessage();
  };

  return (
    <FlashMessage
      style={Styles.alertContainer}
      textStyle={[GeneralStyles.fontSize14, GeneralStyles.defaultFont]}
      position="bottom"
      onPress={onHandlerPress}
    />
  );
};

export default AlertComponent;
