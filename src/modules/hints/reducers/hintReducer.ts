import { initialState } from '../../app/common/initialState';
import { RemoveHintAction } from '../actions/RemoveHintAction';
import { SetHintsAction } from '../actions/SetHintsAction';
import { AddHintAction } from '../actions/AddHintAction';

type Actions = SetHintsAction | AddHintAction | RemoveHintAction;

export function hintReducer(state = initialState, action: Actions) {
    switch (action.type) {
        case SetHintsAction.type:
            return {
                ...state,
                hints: action.hints,
            };

        case AddHintAction.type:
            return {
                ...state,
                hints: [...state.hints, action.hint],
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
