import { Action } from '@ngrx/store';
import { IPoint } from '../interfaces/IPoint';

export class TryToRemovePointAction implements Action {
    public static readonly type = '[Point] Try to remove';

    public readonly type = TryToRemovePointAction.type;

    constructor(public readonly id: IPoint['id']) {}
}
