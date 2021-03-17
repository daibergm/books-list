import React from 'react';
import { FlatList } from 'react-native';

// @Components
import { ListItem } from '../common';

// @Assets
import { GeneralStyles } from '../../assets/';

// @Types
import { Book } from '../../types/book';

type Props = {
  books: Book[];
};

function LibraryComponent({ books }: Props) {
  const renderItem = ({ item }: { item: Book }) => {
    return (
      <ListItem
        image_url={item.image_url}
        title={item.title}
        description={item.author}
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
}

export default LibraryComponent;
