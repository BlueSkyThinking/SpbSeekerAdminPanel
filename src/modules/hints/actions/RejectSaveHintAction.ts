import { Action } from '@ngrx/store';

export class RejectSaveHintAction implements Action {
    public static readonly type = '[Hint] Save hint rejected';

    public readonly type = RejectSaveHintAction.type;
}
