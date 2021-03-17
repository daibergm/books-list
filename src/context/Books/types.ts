// @Types
import { Book } from '../../types/book';

export enum ActionTypes {
  GET_BOOKS_ATTEMPT = 'GET_BOOKS_ATTEMPT',
  GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS',
  GET_BOOKS_FAILURE = 'GET_BOOKS_FAILURE',
  GET_BOOK_ATTEMPT = 'GET_BOOK_ATTEMPT',
  GET_BOOK_SUCCESS = 'GET_BOOK_SUCCESS',
  GET_BOOK_FAILURE = 'GET_BOOK_FAILURE',
}

export type Action = {
  type:
    | ActionTypes.GET_BOOKS_ATTEMPT
    | ActionTypes.GET_BOOKS_SUCCESS
    | ActionTypes.GET_BOOKS_FAILURE
    | ActionTypes.GET_BOOK_ATTEMPT
    | ActionTypes.GET_BOOK_SUCCESS
    | ActionTypes.GET_BOOK_FAILURE;
  payload: Book | Book[];
};
