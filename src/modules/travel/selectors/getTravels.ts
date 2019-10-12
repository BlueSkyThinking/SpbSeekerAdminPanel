import { createSelector } from '@ngrx/store';
import { getAppState } from '../../app/selectors/getAppState';

export const getTravels = createSelector(
    getAppState,
    state => state.travels
);
