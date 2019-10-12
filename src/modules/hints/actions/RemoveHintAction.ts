import { Action } from '@ngrx/store';
import { IHint } from '../interfaces/IHint';

export class RemoveHintAction implements Action {
    public static readonly type = '[Hint] Remove';

    public readonly type = RemoveHintAction.type;

    constructor(public readonly id: IHint['id']) {}
}
