import { HintAction } from '../enums/HintAction';

export interface IHintParameters {
    description: string;
    hintAction: HintAction;
    imgUrl: string;
    name: string;
    shortDescription: string;
}
