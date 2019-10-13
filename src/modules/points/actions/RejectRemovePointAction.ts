import { Action } from '@ngrx/store';

export class RejectRemovePointAction implements Action {
    public static readonly type = '[Point] Remove rejected';

    public readonly type = RejectRemovePointAction.type;
}
