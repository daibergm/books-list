import React, { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// @Components
import { LibraryComponent, Header } from '../../components/';

// @constants
import { tKeys } from '../../constants/';

// @Context
import { BooksContext } from '../../context/';

const LibraryContainer: React.FC = () => {
  const { books, onGetBooks } = useContext(BooksContext);
  const [showInput, setShowInput] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    onGetBooks && onGetBooks();
  }, [onGetBooks]);

  const onHandlerRightPress = () => setShowInput(!showInput);

  const onHandlerChange = (value: string) => {
    alert(value);
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
