import React, { useReducer, useContext } from 'react';
import { isEmpty } from 'lodash';

// @services
import { getBooks } from '../../services';

// @Context
import BooksContext, { initialState } from './BooksContext';
import BooksReducer from './BooksReducer';
import { ActionTypes } from './types';
import { SessionContext } from '../Session/';

// @Types
import { Book } from '../../types/book';

type Props = {
  children: JSX.Element;
};

function BooksState({ children }: Props): JSX.Element {
  const [state, dispatch] = useReducer(BooksReducer, initialState);
  const { onShowAlert } = useContext(SessionContext);

  /**
   * Use to get all books
   */
  const onGetBooks = async (): Promise<void> => {
    if (!state.isLoading) {
      dispatch({ type: ActionTypes.GET_BOOKS_ATTEMPT, payload: [] });
      const rs = await getBooks();

      if (!isEmpty(rs.data)) {
        dispatch({
          type: ActionTypes.GET_BOOKS_SUCCESS,
          payload: rs.data,
        });

        return;
      }

      dispatch({
        type: ActionTypes.GET_BOOKS_FAILURE,
        payload: [],
      });

      onShowAlert &&
        onShowAlert({
          message: rs,
          type: 'danger',
        });
    }
  };

  /**
   * Use to set books list into the state
   * @param {Book[]} books List of books
   */
  const onSetBooks = (books: Book[]) => {
    dispatch({
      type: ActionTypes.GET_BOOKS_SUCCESS,
      payload: books,
    });
  };

  return (
    <BooksContext.Provider value={{ ...state, onGetBooks, onSetBooks }}>
      {children}
    </BooksContext.Provider>
  );
}

export default BooksState;
