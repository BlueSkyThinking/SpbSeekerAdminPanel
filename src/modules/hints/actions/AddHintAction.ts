import { Action } from '@ngrx/store';
import { IHint } from '../interfaces/IHint';

export class AddHintAction implements Action {
    public static readonly type = '[Hint] Add hint';

    public readonly type = AddHintAction.type;

    constructor(public readonly hint: IHint) {}
}
