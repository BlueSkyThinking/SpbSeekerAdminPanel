import { Action } from '@ngrx/store';
import { ICategoryParameters } from '../interfaces/ICategoryParameters';

export class SaveCategoryAction implements Action {
    public static readonly type = '[Category] Save category';

    public readonly type = SaveCategoryAction.type;

    constructor(public readonly parameters: ICategoryParameters) {}
}
