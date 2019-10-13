import { Action } from '@ngrx/store';
import { IPoint } from '../interfaces/IPoint';

export class AddPointAction implements Action {
    public static readonly type = '[Point] Add point';

    public readonly type = AddPointAction.type;

    constructor(public readonly point: IPoint) {}
}
