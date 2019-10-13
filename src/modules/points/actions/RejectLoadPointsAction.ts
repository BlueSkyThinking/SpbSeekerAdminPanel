import { Action } from '@ngrx/store';

export class RejectLoadPointsAction implements Action {
    public static readonly type = '[Point] Load points rejected';

    public readonly type = RejectLoadPointsAction.type;
}
