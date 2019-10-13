import { Action } from '@ngrx/store';

export class LoadPointsAction implements Action {
    public static readonly type = '[Point] Load points';

    public readonly type = LoadPointsAction.type;
}
