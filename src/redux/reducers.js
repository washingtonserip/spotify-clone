import { combineReducers } from 'redux';
import searchCache from './search-cache';
import albums from './albums';

export default combineReducers({ searchCache, albums });
