import { Action } from '@ngrx/store';
import { ITravel } from '../interfaces/ITravel';

export class TryToRemoveTravelAction implements Action {
    public static readonly type = '[Travel] Try ty remove';

    public readonly type = TryToRemoveTravelAction.type;

    constructor(public readonly id: ITravel['id']) {}
}
