import { Action } from '@ngrx/store';
import { IHint } from '../interfaces/IHint';

export class TryToRemoveHintAction implements Action {
    public static readonly type = '[Hint] Try to remove';

    public readonly type = TryToRemoveHintAction.type;

    constructor(public readonly id: IHint['id']) {}
}
