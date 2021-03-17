/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { isEmpty } from 'lodash';

// @Components
import { LibraryComponent, Header } from '../../components/';

// @constants
import { tKeys } from '../../constants/';

// @Context
import { BooksContext, SessionContext } from '../../context/';

// @Services
import { getBooks } from '../../services/';

const LibraryContainer: React.FC = () => {
  const { books, onGetBooks, onSetBooks } = useContext(BooksContext);
  const { onShowAlert } = useContext(SessionContext);
  const [showInput, setShowInput] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    onGetBooks && onGetBooks();
  }, []);

  const onHandlerRightPress = () => setShowInput(!showInput);

  const onHandlerChange = async (value: string) => {
    const rs = await getBooks();

    if (!isEmpty(rs.data)) {
      // Filter data
      const filteredBooks = rs.data.filter((obj: any) =>
        obj.title.toLowerCase().includes(value.toLowerCase()),
      );
      onSetBooks && onSetBooks(filteredBooks);
      return;
    }

    onShowAlert &&
      onShowAlert({
        message: rs,
        type: 'danger',
      });
  };

  return (
    <>
      <Header
        hasLeftIcon
        hasRightIcon
        rightIconPress={onHandlerRightPress}
        title={t(tKeys.libraryLabel)}
        showInput={showInput}
        onChange={onHandlerChange}
      />
      <LibraryComponent books={books} />
    </>
  );
};

export default LibraryContainer;