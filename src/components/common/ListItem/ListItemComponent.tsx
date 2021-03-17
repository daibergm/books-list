import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';

// @Components
import { Text } from '../Text/';

// @Assets
import Styles from './styles';
import { GeneralStyles } from '../../../assets';

type Props = {
  image_url?: string;
  title: string;
  description: string;
};

const ListItemComponent = (props: Props) => {
  const { title, image_url, description } = props;
  const source = image_url
    ? { uri: image_url }
    : require('../../../assets/images/general/placeholder.png');

  return (
    <TouchableOpacity style={[Styles.item, GeneralStyles.flexRow]}>
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
