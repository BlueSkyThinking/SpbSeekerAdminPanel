import { Action } from '@ngrx/store';
import { ICategory } from '../interfaces/ICategory';

export class SetCategoriesAction implements Action {
    public static readonly type = '[Travel] Set categories';

    public readonly type = SetCategoriesAction.type;

    constructor(public readonly categories: ICategory[]) {}
}
