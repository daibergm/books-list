// @Types
import { Book } from '../../types/book';

// @Context
import { initialState, State, mockBook } from './BooksContext';
import { Action, ActionTypes } from './types';

const BooksReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.GET_BOOKS_ATTEMPT:
    case ActionTypes.GET_BOOK_ATTEMPT: {
      const newState: State = {
        ...state,
        isLoading: true,
      };

      return newState;
    }

    case ActionTypes.GET_BOOKS_SUCCESS: {
      const newState: State = {
        ...state,
        books: action.payload as Book[],
        isLoading: false,
      };

      return newState;
    }

    case ActionTypes.GET_BOOKS_FAILURE: {
      const newState: State = {
        ...state,
        books: [],
        isLoading: false,
      };

      return newState;
    }

    case ActionTypes.GET_BOOK_SUCCESS: {
      const newState: State = {
        ...state,
        book: action.payload as Book,
        isLoading: false,
      };

      return newState;
    }

    case ActionTypes.GET_BOOK_FAILURE: {
      const newState: State = {
        ...state,
        book: mockBook,
        isLoading: false,
      };

      return newState;
    }

    default: {
      return state;
    }
  }
};

export default BooksReducer;
