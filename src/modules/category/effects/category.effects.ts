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
