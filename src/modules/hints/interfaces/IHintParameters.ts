import { HintAction } from '../enums/HintAction';

export interface IHintParameters {
    description: string;
    hintAction: HintAction;
    imgFiles: File[];
    name: string;
    shortDescription: string;
}
