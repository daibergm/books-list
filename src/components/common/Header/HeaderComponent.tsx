import React, { useState } from 'react';
import { ImageBackground } from 'react-native';
import { Header, HeaderProps, Icon } from 'react-native-elements';
import { moderateScale } from 'react-native-size-matters';

// @Assets
import Styles from './styles';
import { Colors, GeneralStyles } from '../../../assets/';

// @Components
import { Text } from '../Text/';
import { Input } from '../Input/';

interface Props extends HeaderProps {
  hasLeftIcon?: boolean;
  leftIconType?: string;
  leftIconName?: string;
  leftIconColor?: string;
  leftIconPress?: () => void;
  hasRightIcon?: boolean;
  rightIconType?: string;
  rightIconName?: string;
  rightIconColor?: string;
  rightIconPress?: () => void;
  showInput?: boolean;
  onChange?: (value: string) => void;
  title: string;
}

const HeaderComponent = (props: Props) => {
  const [inputValue, setInputValue] = useState('');
  const {
    hasLeftIcon,
    leftIconType,
    leftIconName,
    leftIconColor,
    leftIconPress,
    hasRightIcon,
    rightIconType,
    rightIconName,
    rightIconColor,
    rightIconPress,
    showInput,
    onChange,
    title,
  } = props;

  const lefComponent = () => (
    <Icon
      type={leftIconType || 'ionicon'}
      name={leftIconName || 'notifications-outline'}
      color={leftIconColor || Colors.white}
      size={moderateScale(25, 0.3)}
      onPress={leftIconPress}
      underlayColor={Colors.transparent}
      iconStyle={showInput ? Styles.iconMargin : {}}
    />
  );

  const rightComponent = () => (
    <Icon
      type={rightIconType || 'ionicon'}
      name={
        rightIconName || (showInput ? 'close-circle-outline' : 'search-outline')
      }
      color={rightIconColor || (showInput ? Colors.danger : Colors.white)}
      size={moderateScale(25, 0.3)}
      onPress={rightIconPress}
      underlayColor={Colors.transparent}
      iconStyle={showInput ? Styles.iconMargin : {}}
    />
  );

  const centerTitle = () => (
    <Text
      style={[GeneralStyles.fontSize18, GeneralStyles.textCenter]}
      upper
      white>
      {title}
    </Text>
  );

  const onHandlerChange = (value: string) => {
    setInputValue(value);
    onChange && onChange(value);
  };

  const centerInput = () => (
    <Input
      value={inputValue}
      onChangeText={onHandlerChange}
      placeholder="Search"
      style={Styles.input}
      placeholderTextColor={Colors.opacityWhite}
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
        rightComponent={hasRightIcon ? rightComponent() : undefined}
        centerComponent={showInput ? centerInput() : centerTitle()}
      />
    </ImageBackground>
  );
};

export default HeaderComponent;
