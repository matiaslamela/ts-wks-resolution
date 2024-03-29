import {combineReducers} from 'redux';
import {usersReducer} from './users';
import {User} from '../actions/index';

export interface StoreState {
	users: User[];
}

export const reducers = combineReducers<StoreState>({
	users: usersReducer,
});
