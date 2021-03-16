import React from 'react';
import { ImageBackground } from 'react-native';
import { Header, HeaderProps, Icon } from 'react-native-elements';
import { moderateScale } from 'react-native-size-matters';

// @Assets
import Styles from './styles';
import { Colors, GeneralStyles } from '../../../assets/';

// @Components
import { Text } from '../Text/';

interface Props extends HeaderProps {
  hasLeftIcon?: boolean;
  leftIconType?: string;
  leftIconName?: string;
  leftIconColor?: string;
  leftIconPress?: () => void;
  title: string;
}

const HeaderComponent = (props: Props) => {
  const {
    hasLeftIcon,
    leftIconType,
    leftIconName,
    leftIconColor,
    leftIconPress,
    title,
  } = props;

  const lefComponent = () => (
    <Icon
      type={leftIconType || 'ionicon'}
      name={leftIconName || 'ios-menu'}
      color={leftIconColor || Colors.white}
      size={moderateScale(40, 0.3)}
      onPress={leftIconPress}
      underlayColor={Colors.transparent}
    />
  );

  return (
    <ImageBackground
      source={require('../../../assets/images/general/bcNavBar.png')}
      style={Styles.imageStyle}>
      <Header
        backgroundColor={Colors.transparent}
        containerStyle={Styles.containerStyle}
        leftComponent={hasLeftIcon ? lefComponent() : undefined}
        centerComponent={
          <Text
            style={[
              GeneralStyles.fontSize18,
              GeneralStyles.textCenter,
              hasLeftIcon && Styles.title,
            ]}
            upper
            white>
            {title}
          </Text>
        }
      />
    </ImageBackground>
  );
};

export default HeaderComponent;
