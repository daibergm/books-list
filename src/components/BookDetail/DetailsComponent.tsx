import React from 'react';
import { View, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import { truncate } from 'lodash';

// @Components
import { Text, Button } from '../../components/common/';

// @Assets
import { GeneralStyles } from '../../assets/';

// @Types
import { Book } from '../../types/book';
import Styles from './styles';

// @Constants
import { tKeys } from '../../constants/';

type Props = {
  book: Book;
};

const DetailsComponent = ({ book }: Props) => {
  const { t } = useTranslation();
  const { image_url, title, author, year } = book;
  const source = image_url
    ? { uri: image_url }
    : require('../../assets/images/general/placeholder.png');

  return (
    <View style={[Styles.container, GeneralStyles.shadow]}>
      <View style={GeneralStyles.flexRow}>
        <Image style={Styles.detailImage} source={source} />
        <View style={GeneralStyles.paddingH15}>
          <Text black style={[GeneralStyles.fontSize22]}>
            {truncate(title.trim(), { length: 23 })}
          </Text>
          <Text style={Styles.success}>{t(tKeys.availableLabel)}</Text>
          <Text style={[Styles.textGrey, Styles.textMargin]}>{author}</Text>
          <Text style={[Styles.textGrey, Styles.textMargin]}>{year}</Text>
          <Text style={[Styles.textGrey, Styles.textMargin]}>Novel</Text>
        </View>
      </View>
      <View style={GeneralStyles.marginT25}>
        <Button secondary title={t(tKeys.addBtn)} />
      </View>
      <View style={GeneralStyles.marginT10}>
        <Button title={t(tKeys.rentBtn)} />
      </View>
    </View>
  );
};

export default DetailsComponent;
