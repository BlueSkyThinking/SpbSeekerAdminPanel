import { Component } from '@angular/core';
import { IHintParameters } from '../../interfaces/IHintParameters';
import { HintAction } from '../../enums/HintAction';
import { IRootState } from '../../../app/interfaces/IRootState';
import { Store } from '@ngrx/store';
import { SaveHintAction } from '../../actions/SaveHintAction';

@Component({
    selector: 'skr-add-hint-parameters-container',
    template: `
        <skr-add-hint
            [hintParameters]="hintParameters"
            (changePointParameters)="handleChangePointParameters($event)"
            (create)="handleCreate()"
        ></skr-add-hint>
    `,
    styles: [],
})
export class AddHintParametersContainerComponent {
    public hintParameters: IHintParameters = {
        name: '',
        description: '',
        shortDescription: '',
        hintAction: HintAction.COMPASS,
        imgUrl: '',
    };

    constructor(private readonly store: Store<IRootState>) {}

    public handleChangePointParameters(value: IHintParameters): void {
        this.hintParameters = value;
    }

    public handleCreate(): void {
        this.store.dispatch(new SaveHintAction(this.hintParameters));
    }
}
