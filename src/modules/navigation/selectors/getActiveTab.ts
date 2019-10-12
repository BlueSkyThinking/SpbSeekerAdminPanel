import { createSelector } from '@ngrx/store';
import { getAppState } from '../../app/selectors/getAppState';

export const getActiveTab = createSelector(
    getAppState,
    state => state.activeTab
);
