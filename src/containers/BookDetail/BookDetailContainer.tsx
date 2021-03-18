/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';

// @Components
import { BookDetailComponent } from '../../components/';

// @Context
import { BooksContext, SessionContext } from '../../context/';

// @Hoc
import WithLoading from '../../hoc/WithLoading';

// @Utils
import { getSuggestedBooks } from '../../utils/';

const BookDetailWithLoading = WithLoading(BookDetailComponent);

type Props = {
  bookId: number;
};

const BookDetailContainer = ({ bookId }: Props) => {
  const { onGetBook, book, books } = useContext(BooksContext);
  const { globalLoading } = useContext(SessionContext);
  const suggestedBooks = getSuggestedBooks(book, books);

  useEffect(() => {
    onGetBook(bookId);
  }, []);

  return (
    <BookDetailWithLoading
      suggestedBooks={suggestedBooks}
      isLoading={globalLoading as boolean}
      book={book}
    />
  );
};

export default BookDetailContainer;
