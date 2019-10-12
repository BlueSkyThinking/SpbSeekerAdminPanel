import { initialState } from '../../app/common/initialState';
import { SetUserAction } from '../actions/SetUserAction';
import { ResetUserAction } from '../actions/ResetUserAction';

type Actions = SetUserAction | ResetUserAction;

export function authReducer(state = initialState, action: Actions) {
    switch (action.type) {
        case SetUserAction.type: {
            return {
                ...state,
                user: action.user,
            };
        }

        case ResetUserAction.type: {
            return {
                ...state,
                user: null,
            };
        }

        default:
            return state;
    }
}
