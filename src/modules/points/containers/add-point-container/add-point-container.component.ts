import { Component } from '@angular/core';
import { IPointParameters } from '../../interfaces/IPointParameters';
import { IRootState } from '../../../app/interfaces/IRootState';
import { Store } from '@ngrx/store';
import { SavePointAction } from '../../actions/SavePointAction';

@Component({
    selector: 'skr-add-point-container',
    template: `
        <skr-add-point
            [pointParameters]="addPointParameters"
            (changePointParameters)="handleChangePointParameters($event)"
            (create)="handleCreate()"
        ></skr-add-point>
    `,
    styles: [],
})
export class AddPointContainerComponent {
    public addPointParameters: IPointParameters = {
        adminId: 1,
        description: '',
        latitude: 0,
        longitude: 0,
        name: '',
        imgFile: [],
        orderNum: 0,
        shortDescription: '',
    };

    constructor(private readonly store: Store<IRootState>) {}

    public handleChangePointParameters(value: IPointParameters): void {
        this.addPointParameters = value;
    }

    public async handleCreate() {
        this.store.dispatch(new SavePointAction(this.addPointParameters));
    }
}
