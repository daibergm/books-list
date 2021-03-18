import React from 'react';
import { View, Image, FlatList, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation, StackActions } from '@react-navigation/native';

// @Components
import { Text } from '../../components/common/';

// @Assets
import { GeneralStyles } from '../../assets/';

// @Types
import { Book } from '../../types/book';
import Styles from './styles';

// @Constants
import { tKeys, BOOK_DETAIL_ROUTE } from '../../constants/';

type Props = {
  suggestedBooks: Book[];
};

const SuggestedBooksComponent = ({ suggestedBooks }: Props) => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const onNavigate = (id?: number) => {
    navigation.dispatch(
      StackActions.replace(BOOK_DETAIL_ROUTE, { bookId: id }),
    );
  };

  const renderItem = ({ item }: { item: Book }) => {
    const source = item.image_url
      ? { uri: item.image_url }
      : require('../../assets/images/general/placeholder.png');

    return (
      <TouchableOpacity
        onPress={() => onNavigate(item.id)}
        style={Styles.suggestedItem}>
        <Image style={Styles.suggestedImage} source={source} />
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={[Styles.container, GeneralStyles.shadow, GeneralStyles.marginT10]}>
      <Text black style={[GeneralStyles.fontSize18, GeneralStyles.textCenter]}>
        {t(tKeys.suggestedLabel)}
      </Text>
      <FlatList
        horizontal
        data={suggestedBooks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default SuggestedBooksComponent;
