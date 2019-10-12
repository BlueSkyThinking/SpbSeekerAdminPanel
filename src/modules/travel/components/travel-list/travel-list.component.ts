import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITravel } from '../../interfaces/ITravel';

@Component({
    selector: 'skr-travel-list',
    template: `
        <skr-travel-list-item
            *ngFor="let travelItem of travelList"
            [travelItem]="travelItem"
            (remove)="handleRemove(travelItem.id)"
        ></skr-travel-list-item>
    `,
    styles: [],
})
export class TravelListComponent {
    @Input() public travelList: ITravel[];

    @Output() public remove: EventEmitter<ITravel['id']> = new EventEmitter();

    public handleRemove(value: ITravel['id']): void {
        this.remove.emit(value);
    }
}
