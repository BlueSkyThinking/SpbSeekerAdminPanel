import { Action } from '@ngrx/store';

export class RejectSaveTravelAction implements Action {
    public static readonly type = '[Travel] Save travel rejected';

    public readonly type = RejectSaveTravelAction.type;
}
