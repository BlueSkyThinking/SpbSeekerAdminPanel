import { Action } from '@ngrx/store';
import { ICategory } from '../interfaces/ICategory';

export class RemoveCategoryAction implements Action {
    public static readonly type = '[Category] Remove';

    public readonly type = RemoveCategoryAction.type;

    constructor(public readonly id: ICategory['id']) {}
}
