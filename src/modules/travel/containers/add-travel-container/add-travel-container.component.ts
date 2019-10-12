import { Component, OnDestroy } from '@angular/core';
import { IAddTravelParameters } from '../../interfaces/IAddTravelParameters';
import { IRootState } from '../../../app/interfaces/IRootState';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ICategory } from '../../interfaces/ICategory';
import { getCategories } from '../../selectors/getCategories';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'skr-add-travel-container',
    template: `
        <skr-add-travel
            [addTravelParameters]="addTravelParameters"
            [categories]="categories"
            (changeTravelParameters)="handleChangeTravelParameters($event)"
            (create)="handleCreate()"
        ></skr-add-travel>
    `,
    styles: [],
})
export class AddTravelContainerComponent implements OnDestroy {
    public addTravelParameters: IAddTravelParameters;
    public categories: ICategory[];

    public categorySubscription: Subscription;

    constructor(public readonly store: Store<IRootState>) {
        this.categorySubscription = this.store
            .pipe(
                select(getCategories),
                tap(categories => {
                    this.categories = categories;
                    this.addTravelParameters = {
                        name: '',
                        imageFile: null,
                        description: '',
                        categoryId: String(categories[0].id),
                    };
                })
            )
            .subscribe();
    }

    public handleChangeTravelParameters(value: IAddTravelParameters): void {
        this.addTravelParameters = value;
    }

    public handleCreate(): void {}

    public ngOnDestroy(): void {
        this.categorySubscription.unsubscribe();
    }
}
