import { Action } from '@ngrx/store';
import { ITravelParameters } from '../interfaces/ITravelParameters';

export class SaveTravelAction implements Action {
    public static readonly type = '[Travel] Save travel';

    public readonly type = SaveTravelAction.type;

    constructor(public readonly parameters: ITravelParameters) {}
}
