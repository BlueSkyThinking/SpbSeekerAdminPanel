import { Component } from '@angular/core';
import { ITravel } from '../../interfaces/ITravel';
import { IRootState } from '../../../app/interfaces/IRootState';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getTravels } from '../../selectors/getTravels';
import { RemoveTravelAction } from '../../actions/RemoveTravelAction';

@Component({
    selector: 'skr-travel-list-containers',
    template: `
        <skr-travel-list
            [travelList]="travelList$ | async"
            (remove)="handleRemove($event)"
        ></skr-travel-list>
    `,
    styles: [],
})
export class TravelListContainersComponent {
    public travelList$: Observable<ITravel[]>;

    constructor(private readonly store: Store<IRootState>) {
        this.travelList$ = this.store.pipe(select(getTravels));
    }

    public handleRemove(value: ITravel) {
        this.store.dispatch(new RemoveTravelAction(value));
    }
}
