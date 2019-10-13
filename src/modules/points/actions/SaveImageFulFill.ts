import { Action } from '@ngrx/store';
import { IPointParameters } from '../interfaces/IPointParameters';

export class SavePointImageFulFill implements Action {
    public static readonly type = '[Point] Save point image fulfilled';

    public readonly type = SavePointImageFulFill.type;

    constructor(
        public readonly payload: {
            pointParameters: IPointParameters;
            imageUrl: string;
        }
    ) {}
}
