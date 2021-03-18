/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { View } from 'react-native';

// @Components
import { Text } from '../../components/';

// @Assets
import { GeneralStyles } from '../../assets/';

// @Context
import { BooksContext } from '../../context/';

type Props = {
  bookId: number;
};

const BookDetailContainer = ({ bookId }: Props) => {
  const { onGetBook, book } = useContext(BooksContext);

  useEffect(() => {
    onGetBook(bookId);
  }, []);

  return (
    <View style={GeneralStyles.justifyCenter}>
      <Text style={[GeneralStyles.textCenter, GeneralStyles.fontSize18]}>
        {`Book id: ${bookId}`}
      </Text>
    </View>
  );
};

export default BookDetailContainer;
