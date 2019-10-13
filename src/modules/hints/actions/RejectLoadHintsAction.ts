import { Action } from '@ngrx/store';

export class RejectLoadHintsAction implements Action {
    public static readonly type = '[Hint] Load hints rejected';

    public readonly type = RejectLoadHintsAction.type;
}
