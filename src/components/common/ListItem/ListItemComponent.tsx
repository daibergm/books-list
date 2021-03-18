import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';

// @Components
import { Text } from '../Text/';

// @Assets
import Styles from './styles';
import { GeneralStyles } from '../../../assets';

type Props = {
  itemId: number;
  image_url?: string;
  title: string;
  description: string;
  onPress?: (param?: number) => void;
};

const ListItemComponent = (props: Props) => {
  const { title, image_url, description, onPress, itemId } = props;
  const source = image_url
    ? { uri: image_url }
    : require('../../../assets/images/general/placeholder.png');

  const onHandlerPress = () => onPress && onPress(itemId);

  return (
    <TouchableOpacity
      onPress={onHandlerPress}
      style={[Styles.item, GeneralStyles.flexRow, GeneralStyles.shadow]}>
      <Image style={Styles.image} source={source} />
      <View style={Styles.descriptionContainer}>
        <Text black style={GeneralStyles.fontSize16}>
          {title.trim()}
        </Text>
        <Text black style={[GeneralStyles.fontSize12, Styles.description]}>
          {description.trim()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItemComponent;
