import { initialState } from '../../app/common/initialState';
import { RemoveTravelAction } from '../actions/RemoveTravelAction';
import { SetTravelsAction } from '../actions/SetTravelsAction';
import { AddTravelAction } from '../actions/AddTravelAction';

type Actions = SetTravelsAction | RemoveTravelAction | AddTravelAction;

export function travelReducer(state = initialState, action: Actions) {
    switch (action.type) {
        case SetTravelsAction.type: {
            return {
                ...state,
                travels: action.travels,
            };
        }

        case AddTravelAction.type: {
            return {
                ...state,
                travels: [...state.travels, action.travel],
            };
        }

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
