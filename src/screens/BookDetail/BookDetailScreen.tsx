import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';

// @Components
import { ContainerComponent, Header } from '../../components/';

// @Containers
import { BookDetailContainer } from '../../containers/';

// @constants
import { BOOK_DETAIL_ROUTE } from '../../constants/';

// @Types
import { LibraryStackParamList } from '../../types/';

type NavigationProps = StackNavigationProp<
  LibraryStackParamList,
  'BOOK_DETAIL'
>;

type RouteProps = RouteProp<LibraryStackParamList, 'BOOK_DETAIL'>;

type Props = {
  navigation: NavigationProps;
  route: RouteProps;
};

const BookDetailScreen = ({ navigation, route }: Props) => {
  const { t } = useTranslation();

  const onGoBack = () => navigation.goBack();

  return (
    <ContainerComponent>
      <>
        <Header
          hasLeftIcon
          leftIconName="chevron-back-outline"
          leftIconPress={onGoBack}
          title={t(BOOK_DETAIL_ROUTE)}
        />
        <BookDetailContainer bookId={route.params.bookId} />
      </>
    </ContainerComponent>
  );
};

export default BookDetailScreen;
