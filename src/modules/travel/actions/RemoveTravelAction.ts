import { Action } from '@ngrx/store';
import { ITravel } from '../interfaces/ITravel';

export class RemoveTravelAction implements Action {
    public static readonly type = '[Travel] Remove item';

    public readonly type = RemoveTravelAction.type;

    constructor(public readonly id: ITravel['id']) {}
}
