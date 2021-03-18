import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

// @Components
import { ContainerComponent, Header } from '../../components/';

// @Containers
import { BookDetailContainer } from '../../containers/';

// @constants
import { BOOK_DETAIL_ROUTE } from '../../constants/';

type StackParamList = {
  params: { bookId: number };
};

type BookDetailScreenRouteProp = RouteProp<StackParamList, 'params'>;

type Props = {
  route: BookDetailScreenRouteProp;
};

const BookDetailScreen = ({ route: { params } }: Props) => {
  const { t } = useTranslation();

  return (
    <ContainerComponent>
      <>
        <Header title={t(BOOK_DETAIL_ROUTE)} />
        <BookDetailContainer bookId={params.bookId} />
      </>
    </ContainerComponent>
  );
};

export default BookDetailScreen;
