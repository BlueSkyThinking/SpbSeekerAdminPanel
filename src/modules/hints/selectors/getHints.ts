import { createSelector } from '@ngrx/store';
import { getAppState } from '../../app/selectors/getAppState';

export const getHints = createSelector(
    getAppState,
    state => state.hints
);
