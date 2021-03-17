import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// @Components
import { LibraryComponent, Header } from '../../components/';

// @constants
import { tKeys } from '../../constants/';

const LibraryContainer: React.FC = () => {
  const [showInput, setShowInput] = useState(false);
  const { t } = useTranslation();

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
      <LibraryComponent />
    </>
  );
};

export default LibraryContainer;
