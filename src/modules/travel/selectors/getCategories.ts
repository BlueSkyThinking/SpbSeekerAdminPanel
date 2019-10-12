import { createSelector } from '@ngrx/store';
import { getAppState } from '../../app/selectors/getAppState';

export const getCategories = createSelector(
    getAppState,
    state => state.categories
);
