import { RemovePointAction } from '../actions/RemovePointAction';
import { initialState } from '../../app/common/initialState';

type Actions = RemovePointAction;

export function pointReducer(state = initialState, action: Actions) {
    switch (action.type) {
        case RemovePointAction.type:
            return {
                ...state,
                points: state.points.filter(point => point.id !== action.id),
            };

        default:
            return state;
    }
}
