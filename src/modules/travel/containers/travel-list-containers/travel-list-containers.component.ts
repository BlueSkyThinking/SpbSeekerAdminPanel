import { Component, OnInit } from '@angular/core';
import { ITravel } from '../../interfaces/ITravel';
import { IRootState } from '../../../app/interfaces/IRootState';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getTravels } from '../../selectors/getTravels';
import { TryToRemoveTravelAction } from '../../actions/TryToRemoveTravelAction';
import { LoadTravelsAction } from '../../actions/LoadTravelsAction';
import { LoadCategoriesAction } from '../../../category/actions/LoadCategoriesAction';

@Component({
    selector: 'skr-travel-list-containers',
    template: `
        <skr-travel-list-item
            *ngFor="let travelItem of travelList$ | async"
            [travelItem]="travelItem"
            (remove)="handleRemove(travelItem.id)"
        ></skr-travel-list-item>
    `,
    styles: [],
})
export class TravelListContainersComponent implements OnInit {
    public travelList$: Observable<ITravel[]>;

    constructor(private readonly store: Store<IRootState>) {
        this.travelList$ = this.store.pipe(select(getTravels));
    }

    public ngOnInit(): void {
        this.store.dispatch(new LoadCategoriesAction());
        this.store.dispatch(new LoadTravelsAction());
    }

    public handleRemove(value: ITravel['id']): void {
        this.store.dispatch(new TryToRemoveTravelAction(value));
    }
}
