import { createSelector } from '@ngrx/store';
import { getAppState } from '../../app/selectors/getAppState';

export const getPoints = createSelector(
    getAppState,
    state => state.points
);
