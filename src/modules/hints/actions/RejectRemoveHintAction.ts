import { Action } from '@ngrx/store';

export class RejectRemoveHintAction implements Action {
    public static readonly type = '[Hint] Remove hint rejected';

    public readonly type = RejectRemoveHintAction.type;
}
