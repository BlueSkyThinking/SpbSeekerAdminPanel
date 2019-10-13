import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LoadPointsAction } from '../actions/LoadPointsAction';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ApiPointService } from '../../api/services/api-point.service';
import { SetPointsAction } from '../actions/SetPointsAction';
import { of } from 'rxjs';
import { NotificationService } from '../../notification/services/notification.service';
import { TryToRemovePointAction } from '../actions/TryToRemovePointAction';
import { RemovePointAction } from '../actions/RemovePointAction';
import { RejectLoadPointsAction } from '../actions/RejectLoadPointsAction';
import { RejectRemovePointAction } from '../actions/RejectRemovePointAction';

@Injectable()
export class PointEffects {
    public loadPoints$ = createEffect(() =>
        this.actions$.pipe(
            ofType(LoadPointsAction.type),
            switchMap(() =>
                this.apiEndpointService.getPoints().pipe(
                    map(points => new SetPointsAction(points)),
                    catchError(() => {
                        this.notificationService.error('Failed to load points');
                        return of(new RejectLoadPointsAction());
                    })
                )
            )
        )
    );

    public removePoint$ = createEffect(() =>
        this.actions$.pipe(
            ofType<TryToRemovePointAction>(TryToRemovePointAction.type),
            switchMap(action =>
                this.apiEndpointService.remove(action.id).pipe(
                    map(() => new RemovePointAction(action.id)),
                    catchError(() => {
                        this.notificationService.error(
                            'Failed to remove point'
                        );
                        return of(new RejectRemovePointAction());
                    })
                )
            )
        )
    );

    constructor(
        private readonly actions$: Actions,
        private readonly apiEndpointService: ApiPointService,
        private readonly notificationService: NotificationService
    ) {}
}
