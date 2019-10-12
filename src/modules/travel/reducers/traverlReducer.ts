import { initialState } from '../../app/common/initialState';
import { RemoveTravelAction } from '../actions/RemoveTravelAction';

type Actions = RemoveTravelAction;

export function travelReducer(state = initialState, action: Actions) {
    switch (action.type) {
        case RemoveTravelAction.type: {
            return {
                ...state,
                travels: state.travels.filter(
                    travel => travel.id !== action.id
                ),
            };
        }

        default:
            return state;
    }
}
