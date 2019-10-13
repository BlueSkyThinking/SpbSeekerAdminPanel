import { RemovePointAction } from '../actions/RemovePointAction';
import { initialState } from '../../app/common/initialState';
import { SetPointsAction } from '../actions/SetPointsAction';

type Actions = SetPointsAction | RemovePointAction;

export function pointReducer(state = initialState, action: Actions) {
    switch (action.type) {
        case SetPointsAction.type:
            return {
                ...state,
                points: action.points,
            };

        case RemovePointAction.type:
            return {
                ...state,
                points: state.points.filter(point => point.id !== action.id),
            };

        default:
            return state;
    }
}
