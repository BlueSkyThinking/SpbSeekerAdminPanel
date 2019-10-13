import { Action } from '@ngrx/store';

export class RejectRemoveTravel implements Action {
    public static readonly type = '[Travel] Remove rejected';

    public readonly type = RejectRemoveTravel.type;
}
