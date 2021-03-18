import React from 'react';
import { View, Image, ImageSourcePropType } from 'react-native';
import { useTranslation } from 'react-i18next';

// @Components
import { Text } from '../common';

// @Assets
import { GeneralStyles } from '../../assets';

// @Types
import { Comment } from '../../types/book';
import Styles from './styles';

// @Constants
import { tKeys } from '../../constants/';

type Props = {
  comments: Comment[];
};

/**
 * Used to select placeholder
 * @param {string} gender User gender
 * @returns {ImageSourcePropType}
 */
const getSource = (gender: string): ImageSourcePropType => {
  switch (gender) {
    case 'male': {
      return require('../../assets/images/users/male.png');
    }

    case 'female': {
      return require('../../assets/images/users/female.png');
    }

    default: {
      return require('../../assets/images/users/male.png');
    }
  }
};

const BookCommentsComponent = ({ comments }: Props) => {
  const { t } = useTranslation();

  const renderItem = (item: Comment, index: number) => {
    const source = getSource(item.gender);

    return (
      <View
        key={`${item.name}-${index}`}
        style={[Styles.suggestedItem, GeneralStyles.flexRow]}>
        <Image style={Styles.commentImage} source={source} />
        <View style={[GeneralStyles.paddingH15, Styles.commentContainer]}>
          <Text black style={GeneralStyles.fontSize16}>
            {item.name}
          </Text>
          <Text style={Styles.textGrey}>{item.comment}</Text>
        </View>
      </View>
    );
  };

  return (
    <View
      style={[Styles.container, GeneralStyles.shadow, GeneralStyles.marginT10]}>
      {comments.map((comment, index) => renderItem(comment, index))}
      <Text style={[GeneralStyles.marginT10, GeneralStyles.textCenter]}>
        {t(tKeys.commentsLabel)}
      </Text>
    </View>
  );
};

export default BookCommentsComponent;
