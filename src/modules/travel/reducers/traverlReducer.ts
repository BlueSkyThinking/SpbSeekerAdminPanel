import { initialState } from '../../app/common/initialState';
import { RemoveTravelAction } from '../actions/RemoveTravelAction';
import { SetCategoriesAction } from '../actions/SetCategoriesAction';

type Actions = RemoveTravelAction | SetCategoriesAction;

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

        case SetCategoriesAction.type: {
            return {
                ...state,
                categories: action.categories,
            };
        }

        default:
            return state;
    }
}
