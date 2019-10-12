import { Component } from '@angular/core';
import { IHintParameters } from '../../interfaces/IHintParameters';
import { HintAction } from '../../enums/HintAction';

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

    public handleChangePointParameters(value: IHintParameters): void {
        this.hintParameters = value;
    }

    public handleCreate(): void {
        console.log(this.hintParameters);
    }
}
