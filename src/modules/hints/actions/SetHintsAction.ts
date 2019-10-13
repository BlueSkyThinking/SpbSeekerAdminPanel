import { Action } from '@ngrx/store';
import { IHint } from '../interfaces/IHint';

export class SetHintsAction implements Action {
    public static readonly type = '[Hint] Set hints';

    public readonly type = SetHintsAction.type;

    constructor(public readonly hints: IHint[]) {}
}
