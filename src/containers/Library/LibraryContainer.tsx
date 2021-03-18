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

// @Hoc
import WithLoading from '../../hoc/WithLoading';

const LibraryWithLoading = WithLoading(LibraryComponent);

const LibraryContainer = () => {
  const { books, onGetBooks, onSetBooks } = useContext(BooksContext);
  const {
    onShowAlert,
    globalLoading,
    onShowLoading,
    onHideLoading,
  } = useContext(SessionContext);
  const [showInput, setShowInput] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    onGetBooks && onGetBooks();
  }, []);

  const onHandlerRightPress = () => setShowInput(!showInput);

  const onHandlerChange = async (value: string) => {
    onShowLoading && onShowLoading();
    const rs = await getBooks();

    if (!isEmpty(rs.data)) {
      // Filter data
      const filteredBooks = rs.data.filter((obj: any) =>
        obj.title.toLowerCase().includes(value.toLowerCase()),
      );
      onSetBooks && onSetBooks(filteredBooks);
    } else {
      onShowAlert &&
        onShowAlert({
          message: rs,
          type: 'danger',
        });
    }

    onHideLoading && onHideLoading();
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
      <LibraryWithLoading isLoading={globalLoading as boolean} books={books} />
    </>
  );
};

export default LibraryContainer;
