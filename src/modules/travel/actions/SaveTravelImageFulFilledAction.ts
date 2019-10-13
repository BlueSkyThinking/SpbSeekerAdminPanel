import { Action } from '@ngrx/store';
import { ITravelParameters } from '../interfaces/ITravelParameters';

export class SaveTravelImageFulFilledAction implements Action {
    public static readonly type = '[Travel] Save image fulfilled';

    public readonly type = SaveTravelImageFulFilledAction.type;

    constructor(
        public readonly payload: {
            travelParameters: ITravelParameters;
            imageUrl: string;
        }
    ) {}
}
