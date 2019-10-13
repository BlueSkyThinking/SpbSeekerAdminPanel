import { Action } from '@ngrx/store';
import { IHintParameters } from '../interfaces/IHintParameters';

export class SaveHintImageFulFilledAction implements Action {
    public static readonly type = '[Hint] Save hint image fulfilled';

    public readonly type = SaveHintImageFulFilledAction.type;

    constructor(
        public readonly payload: {
            travelParameters: IHintParameters;
            imageUrl: string;
        }
    ) {}
}
