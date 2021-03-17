import React from 'react';
import { FlatList } from 'react-native';

// @Components
import { ListItem } from '../common';

// @Assets
import { GeneralStyles } from '../../assets/';

// @Types
import { Book } from '../../types/book';

const DATA: Book[] = [
  {
    id: 1,
    author: 'Emmie Thiel',
    title: 'Ring of Bright Water',
    genre: 'Short story',
    publisher: 'Butterworth-Heinemann',
    year: '1968',
  },
  {
    id: 2,
    author: 'Christopher Pike',
    title: 'Scavenger Hunt',
    genre: 'other',
    publisher: 'Pocket Books',
    year: '1989',
  },
  {
    id: 3,
    author: 'Lois Duncan',
    title: 'Locked in time',
    genre: 'suspense',
    publisher: 'Little, Brown',
    year: '1985',
    image_url: 'http://wolox-training.s3.amazonaws.com/uploads/6942334-M.jpg',
  },
  {
    id: 4,
    author: 'Christopher Pike',
    title: 'Scavenger Hunt',
    genre: 'suspense',
    publisher: 'Pocket Books',
    year: '1989',
    image_url: 'http://wolox-training.s3.amazonaws.com/uploads/6963511-M.jpg',
  },
  {
    id: 5,
    author: 'Christopher Pike',
    title: 'Scavenger Hunt',
    genre: 'suspense',
    publisher: 'Pocket Books',
    year: '1989',
    image_url: 'http://wolox-training.s3.amazonaws.com/uploads/6963511-M.jpg',
  },
  {
    id: 6,
    author: 'Paula Hawkins',
    title: 'The Girl on the Train\n',
    genre: 'suspense',
    publisher: 'Riverhead Books',
    year: '2015',
    image_url: 'http://wolox-training.s3.amazonaws.com/uploads/content.jpeg',
  },
  {
    id: 7,
    author: 'Anthony Doerr',
    title: 'All the Light We Cannot See',
    genre: 'suspense',
    publisher: 'Scribner',
    year: '2014',
    image_url: 'http://wolox-training.s3.amazonaws.com/uploads/content.jpeg',
  },
  {
    id: 8,
    author: 'John Katzenbach',
    title: 'The analyst',
    genre: 'thriller',
    publisher: 'Ballantine Books',
    year: '2003',
    image_url:
      'http://wolox-training.s3.amazonaws.com/uploads/el-psicoanalista-analyst-john-katzenbach-paperback-cover-art.jpg',
  },
  {
    id: 9,
    author: 'Andy Weir',
    title: 'The Martian',
    genre: 'fiction',
    publisher: 'Crown Publishing Group',
    year: '2011',
    image_url:
      'http://wolox-training.s3.amazonaws.com/uploads/41DNuJfahyL._SX322_BO1_204_203_200_.jpg',
  },
];

function LibraryComponent() {
  const renderItem = ({ item }: { item: Book }) => {
    return (
      <ListItem
        image_url={item.image_url}
        title={item.title}
        description={item.author}
      />
    );
  };

  return (
    <FlatList
      contentContainerStyle={[
        GeneralStyles.paddingT15,
        GeneralStyles.paddingB25,
      ]}
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
}

export default LibraryComponent;
