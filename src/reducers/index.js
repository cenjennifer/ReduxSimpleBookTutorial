import { combineReducers } from 'redux';
import  BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  //telling redux how to create our app state/mapping of state
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
