import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// @Components
import { ListItem } from '../common';

// @Assets
import { GeneralStyles } from '../../assets/';

// @Types
import { Book } from '../../types/book';

// @Constants
import { BOOK_DETAIL_ROUTE } from '../../constants/';

type Props = {
  books: Book[];
};

const LibraryComponent = ({ books }: Props) => {
  const navigation = useNavigation();

  const onNavigate = (id?: number) =>
    navigation.navigate(BOOK_DETAIL_ROUTE, { bookId: id });

  const renderItem = ({ item }: { item: Book }) => {
    return (
      <ListItem
        image_url={item.image_url}
        title={item.title}
        description={item.author}
        onPress={onNavigate}
        itemId={item.id}
      />
    );
  };

  return (
    <FlatList
      contentContainerStyle={[
        GeneralStyles.paddingT15,
        GeneralStyles.paddingB25,
      ]}
      data={books}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default LibraryComponent;
