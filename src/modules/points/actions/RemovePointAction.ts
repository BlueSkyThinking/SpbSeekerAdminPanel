import { Action } from '@ngrx/store';
import { IPoint } from '../interfaces/IPoint';

export class RemovePointAction implements Action {
    public static readonly type = '[Point] Remove';

    public readonly type = RemovePointAction.type;

    constructor(public readonly id: IPoint['id']) {}
}
