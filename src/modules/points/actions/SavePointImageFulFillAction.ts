import { Action } from '@ngrx/store';
import { IPointParameters } from '../interfaces/IPointParameters';

export class SavePointImageFulFillAction implements Action {
    public static readonly type = '[Point] Save point image fulfilled';

    public readonly type = SavePointImageFulFillAction.type;

    constructor(
        public readonly payload: {
            pointParameters: IPointParameters;
            imageUrl: string;
        }
    ) {}
}
