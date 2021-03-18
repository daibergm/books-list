import React from 'react';
import { View } from 'react-native';

// @Components
import { Text } from '../../components/';

// @Assets
import { GeneralStyles } from '../../assets/';

type Props = {
  bookId: number;
};

const BookDetailContainer = ({ bookId }: Props) => {
  return (
    <View style={GeneralStyles.justifyCenter}>
      <Text style={[GeneralStyles.textCenter, GeneralStyles.fontSize18]}>
        {`Book id: ${bookId}`}
      </Text>
    </View>
  );
};

export default BookDetailContainer;
