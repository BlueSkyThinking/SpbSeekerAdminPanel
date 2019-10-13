import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiCategoryService } from '../../api/services/api-category.service';
import { NotificationService } from '../../notification/services/notification.service';
import { LoadCategoriesAction } from '../actions/LoadCategoriesAction';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { SetCategoriesAction } from '../actions/SetCategoriesAction';
import { RejectLoadCategoriesAction } from '../actions/RejectLoadCategoriesAction';
import { TryToRemoveCategoryAction } from '../actions/TryToRemoveCategoryAction';
import { RemoveCategoryAction } from '../actions/RemoveCategoryAction';
import { RejectRemoveCategoryAction } from '../actions/RejectRemoveCategoryAction';
import { SaveCategoryAction } from '../actions/SaveCategoryAction';
import { AddCategoryAction } from '../actions/AddCategoryAction';
import { RejectSaveCategoryAction } from '../actions/RejectSaveCategoryAction';

@Injectable()
export class CategoryEffects {
    public loadCategories$ = createEffect(() =>
        this.actions$.pipe(
            ofType(LoadCategoriesAction.type),
            switchMap(() =>
                this.apiEndpointCategoryService.getHints().pipe(
                    map(categories => new SetCategoriesAction(categories)),
                    catchError(() => {
                        this.notificationService.error(
                            'Failed to load categories'
                        );
                        return of(new RejectLoadCategoriesAction());
                    })
                )
            )
        )
    );

    public saveCategory$ = createEffect(() =>
        this.actions$.pipe(
            ofType<SaveCategoryAction>(SaveCategoryAction.type),
            switchMap(action =>
                this.apiEndpointCategoryService.save(action.parameters).pipe(
                    map(category => {
                        this.notificationService.success(
                            'Category successfully added'
                        );
                        return new AddCategoryAction(category);
                    }),
                    catchError(() => {
                        this.notificationService.error(
                            'Failed to save category'
                        );
                        return of(new RejectSaveCategoryAction());
                    })
                )
            )
        )
    );

    public removeCategories$ = createEffect(() =>
        this.actions$.pipe(
            ofType<TryToRemoveCategoryAction>(TryToRemoveCategoryAction.type),
            switchMap(action =>
                this.apiEndpointCategoryService.remove(action.id).pipe(
                    map(() => new RemoveCategoryAction(action.id)),
                    catchError(() => {
                        this.notificationService.error(
                            'Failed to remove category'
                        );
                        return of(new RejectRemoveCategoryAction());
                    })
                )
            )
        )
    );

    constructor(
        private readonly actions$: Actions,
        private readonly apiEndpointCategoryService: ApiCategoryService,
        private readonly notificationService: NotificationService
    ) {}
}
