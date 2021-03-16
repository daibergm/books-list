import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// @Components
import { ContainerComponent, Header } from '../../components';

// @constants
import { tKeys } from '../../constants/';

const LibraryScreen = () => {
  const [showInput, setShowInput] = useState(false);
  const { t } = useTranslation();

  const onHandlerRightPress = () => setShowInput(!showInput);

  const onHandlerChange = (value: string) => {
    alert(value);
  };

  return (
    <ContainerComponent>
      <>
        <Header
          hasLeftIcon
          hasRightIcon
          rightIconPress={onHandlerRightPress}
          title={t(tKeys.libraryLabel)}
          showInput={showInput}
          onChange={onHandlerChange}
        />
      </>
    </ContainerComponent>
  );
};

export default LibraryScreen;
