import { createSelector } from '@ngrx/store';
import { getUser } from './getUser';

export const getLoginUserState = createSelector(
    getUser,
    user => Boolean(user)
);
