import { Component } from '@angular/core';
import { IPointParameters } from '../../interfaces/IPointParameters';

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
        imgUrlList: [],
        orderNum: 0,
        shortDescription: '',
    };

    public handleChangePointParameters(value: IPointParameters): void {
        this.addPointParameters = value;
    }

    public handleCreate(): void {
        console.log(this.addPointParameters);
    }
}
