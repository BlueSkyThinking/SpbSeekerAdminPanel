import { Action } from '@ngrx/store';

export class LoadTravelsAction implements Action {
    public static readonly type = '[Travel] Load travels';

    public readonly type = LoadTravelsAction.type;
}
