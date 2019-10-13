import { Action } from '@ngrx/store';
import { IPointParameters } from '../interfaces/IPointParameters';

export class SaveImageFulFill implements Action {
    public static readonly type = '[Point] Save image fulfilled';

    public readonly type = SaveImageFulFill.type;

    constructor(
        public readonly payload: {
            pointParameters: IPointParameters;
            imageUrl: string;
        }
    ) {}
}
