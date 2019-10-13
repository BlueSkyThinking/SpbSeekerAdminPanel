import { Action } from '@ngrx/store';
import { ITravel } from '../interfaces/ITravel';

export class SetTravelsAction implements Action {
    public static readonly type = '[Travel] Set travels';

    public readonly type = SetTravelsAction.type;

    constructor(public readonly travels: ITravel[]) {}
}
