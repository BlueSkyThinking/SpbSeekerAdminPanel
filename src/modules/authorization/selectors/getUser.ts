import { createSelector } from '@ngrx/store';
import { getAppState } from '../../app/selectors/getAppState';

export const getUser = createSelector(
    getAppState,
    state => state.user
);
