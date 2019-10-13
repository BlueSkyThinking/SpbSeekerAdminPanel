import { Action } from '@ngrx/store';
import { IPoint } from '../interfaces/IPoint';

export class SetPointsAction implements Action {
    public static readonly type = '[Point] Set points';

    public readonly type = SetPointsAction.type;

    constructor(public readonly points: IPoint[]) {}
}
