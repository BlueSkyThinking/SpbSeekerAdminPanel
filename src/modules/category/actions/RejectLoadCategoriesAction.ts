import { Action } from '@ngrx/store';

export class RejectLoadCategoriesAction implements Action {
    public static readonly type = '[Category] Load category rejected';

    public readonly type = RejectLoadCategoriesAction.type;
}
