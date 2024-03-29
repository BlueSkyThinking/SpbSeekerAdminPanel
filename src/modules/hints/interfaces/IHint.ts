import { HintAction } from '../enums/HintAction';

export interface IHint {
    id: number;
    name: string;
    description: string;
    shortDescription: string;
    hintAction: HintAction;
    imgUrl: string;
}
