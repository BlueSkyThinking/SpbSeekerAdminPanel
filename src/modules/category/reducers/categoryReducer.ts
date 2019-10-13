import { initialState } from '../../app/common/initialState';
import { SetCategoriesAction } from '../actions/SetCategoriesAction';
import { RemoveCategoryAction } from '../actions/RemoveCategoryAction';
import { AddCategoryAction } from '../actions/AddCategoryAction';

type Actions = SetCategoriesAction | AddCategoryAction | RemoveCategoryAction;

export function categoryReducer(state = initialState, action: Actions) {
    switch (action.type) {
        case SetCategoriesAction.type:
            return {
                ...state,
                categories: action.categories,
            };

        case AddCategoryAction.type:
            return {
                ...state,
                categories: [...state.categories, action.category],
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
