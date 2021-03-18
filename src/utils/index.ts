// @Types
import { AgeDropdownItem } from '../types/';

// @Constants
import { tKeys } from '../constants/';

// @Types
import { Book } from '../types/book';

/**
 * Used to generate an array of ages
 * @param {any} t Function to translate a string
 * @returns {AgeDropdownItem[]}
 */
export const ageGenerator = (t: any): AgeDropdownItem[] => {
  const agesItems: AgeDropdownItem[] = [
    {
      label: t(tKeys.agePlaceholder),
      value: '0',
    },
  ];

  for (let index = 1; index < 91; index++) {
    const item: AgeDropdownItem = {
      label: index.toString(),
      value: index.toString(),
    };
    agesItems.push(item);
  }

  return agesItems;
};

/**
 * Used to get all suggested books based on genre
 * @param {Book} book Current book
 * @param {Book[]} books List of books
 * @returns {Book[]}
 */
export const getSuggestedBooks = (book: Book, books: Book[]): Book[] =>
  books.filter(
    (item) => item.genre === book.genre && item.title !== book.title,
  );
