import { Action } from '@ngrx/store';
import { ICategory } from '../interfaces/ICategory';

export class AddCategoryAction implements Action {
    public static readonly type = '[Category] Add category';

    public readonly type = AddCategoryAction.type;

    constructor(public readonly category: ICategory) {}
}
