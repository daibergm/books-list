export type AgeDropdownItem = {
  label: string;
  value: string;
};

export type LibraryStackParamList = {
  LOGIN: undefined;
  LIBRARY: undefined;
  BOOK_DETAIL: { bookId: number };
};
