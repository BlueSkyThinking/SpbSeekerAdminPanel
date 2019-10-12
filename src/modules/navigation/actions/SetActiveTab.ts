import { Action } from '@ngrx/store';
import { Tab } from '../enums/Tab';

export class SetActiveTab implements Action {
    public static readonly type = '[Tab] Set active tab';

    public readonly type = SetActiveTab.type;

    constructor(public readonly tab: Tab) {}
}
