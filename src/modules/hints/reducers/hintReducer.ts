import { initialState } from '../../app/common/initialState';
import { RemoveHintAction } from '../actions/RemoveHintAction';
import { SetHintsAction } from '../actions/SetHintsAction';

type Actions = SetHintsAction | RemoveHintAction;

export function hintReducer(state = initialState, action: Actions) {
    switch (action.type) {
        case SetHintsAction.type:
            return {
                ...state,
                hints: action.hints,
            };

        case RemoveHintAction.type:
            return {
                ...state,
                hints: state.hints.filter(hint => hint.id !== action.id),
            };

        default:
            return state;
    }
}
