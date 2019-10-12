import { initialState } from '../../app/common/initialState';
import { SetCategoriesAction } from '../actions/SetCategoriesAction';
import { RemoveCategoryAction } from '../actions/RemoveCategoryAction';

type Actions = SetCategoriesAction | RemoveCategoryAction;

export function categoryReducer(state = initialState, action: Actions) {
    switch (action.type) {
        case SetCategoriesAction.type:
            return {
                ...state,
                categories: action.categories,
            };

        case RemoveCategoryAction.type:
            return {
                ...state,
                categories: state.categories.filter(
                    category => category.id !== action.id
                ),
            };

        default:
            return state;
    }
}
