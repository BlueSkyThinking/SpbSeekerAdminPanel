import { Action } from '@ngrx/store';

export class RejectSaveCategoryAction implements Action {
    public static readonly type = '[Category] Save category rejected';

    public readonly type = RejectSaveCategoryAction.type;
}
