import { Action } from '@ngrx/store';
import { ITravel } from '../interfaces/ITravel';

export class AddTravelAction implements Action {
    public static readonly type = '[Travel] Add travel';

    public readonly type = AddTravelAction.type;

    constructor(public readonly travel: ITravel) {}
}
