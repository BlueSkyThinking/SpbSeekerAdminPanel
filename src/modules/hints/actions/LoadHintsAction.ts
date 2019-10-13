import { Action } from '@ngrx/store';

export class LoadHintsAction implements Action {
    public static readonly type = '[Hint] Load hints';

    public readonly type = LoadHintsAction.type;
}
