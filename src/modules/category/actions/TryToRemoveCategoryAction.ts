import { Action } from '@ngrx/store';
import { ICategory } from '../interfaces/ICategory';

export class TryToRemoveCategoryAction implements Action {
    public static readonly type = '[Category] Try to remove';

    public readonly type = TryToRemoveCategoryAction.type;

    constructor(public readonly id: ICategory['id']) {}
}
