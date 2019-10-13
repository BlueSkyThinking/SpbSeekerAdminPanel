import { Action } from '@ngrx/store';

export class RejectSavePointAction implements Action {
    public static readonly type = '[Point] Save point rejected';

    public readonly type = RejectSavePointAction.type;
}
