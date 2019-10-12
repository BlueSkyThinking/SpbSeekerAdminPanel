import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IPoint } from '../../interfaces/IPoint';
import { IRootState } from '../../../app/interfaces/IRootState';
import { select, Store } from '@ngrx/store';
import { getPoints } from '../../selectors/getPoints';
import { RemovePointAction } from '../../actions/RemovePointAction';

@Component({
    selector: 'skr-point-list-container',
    template: `
        <skr-point-list-item
            *ngFor="let point of points$ | async"
            [point]="point"
            (remove)="handleRemove(point.id)"
        ></skr-point-list-item>
    `,
    styles: [],
})
export class PointListContainerComponent {
    public points$: Observable<IPoint[]>;

    constructor(private readonly store: Store<IRootState>) {
        this.points$ = this.store.pipe(select(getPoints));
    }

    public handleRemove(id: IPoint['id']): void {
        this.store.dispatch(new RemovePointAction(id));
    }
}
