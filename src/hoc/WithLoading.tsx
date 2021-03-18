import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useTranslation } from 'react-i18next';

// @Assets
import { GeneralStyles, Colors } from '../assets/';

// @Components
import { Text } from '../components/';

type Props = {
  isLoading: boolean;
};

const WithLoading = <T extends {}>(
  Component: React.ComponentType<T>,
): React.ComponentType<T & Props> => {
  const WihLoadingComponent = ({ isLoading, ...props }: Props) => {
    const { t } = useTranslation();

    if (!isLoading) {
      return <Component {...(props as T)} />;
    }

    return (
      <View style={[GeneralStyles.flex1, GeneralStyles.justifyCenter]}>
        <ActivityIndicator size="large" color={Colors.secondary} />
        <Text style={[GeneralStyles.textCenter, GeneralStyles.fontSize16]}>
          {t('loading')}
        </Text>
      </View>
    );
  };

  return WihLoadingComponent;
};

export default WithLoading;
