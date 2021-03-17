import { createContext, Context } from 'react';

// @Types
import { Book } from '../../types/book';

export type State = {
  books: Book[];
  book?: Book;
  isLoading: boolean;
  onGetBooks?: () => void;
  onSetBooks?: (books: Book[]) => void;
  onGetBook?: () => void;
};

export const initialState: State = {
  books: [],
  isLoading: false,
};

const BooksContext: Context<State> = createContext(initialState);

export default BooksContext;
