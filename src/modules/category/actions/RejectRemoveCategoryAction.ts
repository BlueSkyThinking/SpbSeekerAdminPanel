import { Action } from '@ngrx/store';

export class RejectRemoveCategoryAction implements Action {
    public static readonly type = '[Category] Remove category rejected';

    public readonly type = RejectRemoveCategoryAction.type;
}
