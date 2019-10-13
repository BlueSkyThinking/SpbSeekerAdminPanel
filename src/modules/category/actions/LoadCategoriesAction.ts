import { Action } from '@ngrx/store';

export class LoadCategoriesAction implements Action {
    public static readonly type = '[Category] Load categories';

    public readonly type = LoadCategoriesAction.type;
}
