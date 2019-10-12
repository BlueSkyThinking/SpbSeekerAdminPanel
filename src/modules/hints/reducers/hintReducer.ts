import { initialState } from '../../app/common/initialState';
import { RemoveHintAction } from '../actions/RemoveHintAction';

type Actions = RemoveHintAction;

export function hintReducer(state = initialState, action: Actions) {
    switch (action.type) {
        case RemoveHintAction.type:
            return {
                ...state,
                hints: state.hints.filter(hint => hint.id !== action.id),
            };

        default:
            return state;
    }
}
