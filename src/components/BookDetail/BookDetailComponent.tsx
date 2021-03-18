import React from 'react';
import { View, ScrollView } from 'react-native';
import { isEmpty } from 'lodash';

// @Components
import DetailsComponent from './DetailsComponent';
import SuggestedBooksComponent from './SuggestedBooksComponent';
import BookCommentsComponent from './BookCommentsComponent';

// @Assets
import { GeneralStyles } from '../../assets/';

// @Types
import { Book, Comment } from '../../types/book';

type Props = {
  book: Book;
  suggestedBooks: Book[];
};

const BookDetailComponent = ({ book, suggestedBooks }: Props) => {
  return (
    <ScrollView
      alwaysBounceVertical={false}
      showsVerticalScrollIndicator={false}>
      <View
        style={[
          GeneralStyles.flex1,
          GeneralStyles.marginT30,
          GeneralStyles.paddingH15,
          GeneralStyles.paddingB25,
        ]}>
        <DetailsComponent book={book} />
        {!isEmpty(suggestedBooks) && (
          <SuggestedBooksComponent suggestedBooks={suggestedBooks} />
        )}
        {!isEmpty(book.comments) && (
          <BookCommentsComponent comments={book.comments as Comment[]} />
        )}
      </View>
    </ScrollView>
  );
};

export default BookDetailComponent;
