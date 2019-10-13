import { Action } from '@ngrx/store';

export class RejectLoadTravelsAction implements Action {
    public static readonly type = '[Point] Load travels rejected';

    public readonly type = RejectLoadTravelsAction.type;
}
