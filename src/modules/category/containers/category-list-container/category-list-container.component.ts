import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../../interfaces/ICategory';
import { IRootState } from '../../../app/interfaces/IRootState';
import { select, Store } from '@ngrx/store';
import { getCategories } from '../../selectors/getCategories';
import { LoadCategoriesAction } from '../../actions/LoadCategoriesAction';
import { TryToRemoveCategoryAction } from '../../actions/TryToRemoveCategoryAction';

@Component({
    selector: 'skr-category-list-container',
    template: `
        <skr-category-list-item
            *ngFor="let category of categories$ | async"
            [category]="category"
            (remove)="handleRemove(category.id)"
        ></skr-category-list-item>
    `,
    styles: [],
})
export class CategoryListContainerComponent {
    public categories$: Observable<ICategory[]>;

    constructor(private readonly store: Store<IRootState>) {
        this.categories$ = this.store.pipe(select(getCategories));
        this.store.dispatch(new LoadCategoriesAction());
    }

    public handleRemove(id: ICategory['id']): void {
        this.store.dispatch(new TryToRemoveCategoryAction(id));
    }
}
