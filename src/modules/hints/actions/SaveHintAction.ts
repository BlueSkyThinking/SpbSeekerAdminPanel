import { Action } from '@ngrx/store';
import { IHintParameters } from '../interfaces/IHintParameters';

export class SaveHintAction implements Action {
    public static readonly type = '[Hint] Save hint';

    public readonly type = SaveHintAction.type;

    constructor(public readonly parameters: IHintParameters) {}
}
