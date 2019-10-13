import { Action } from '@ngrx/store';
import { IPointParameters } from '../../points/interfaces/IPointParameters';

export class SavePointAction implements Action {
    public static readonly type = '[Point] Save point';

    public readonly type = SavePointAction.type;

    constructor(public readonly point: IPointParameters) {}
}
