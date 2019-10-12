import { initialState } from '../../app/common/initialState';
import { SetActiveTab } from '../actions/SetActiveTab';

type Actions = SetActiveTab;

export function navigationReducer(state = initialState, action: Actions) {
    switch (action.type) {
        case SetActiveTab.type: {
            return {
                ...state,
                activeTab: action.tab,
            };
        }

        default:
            return state;
    }
}
