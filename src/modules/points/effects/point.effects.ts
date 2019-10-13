import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
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
import { AddPointAction } from '../actions/AddPointAction';
import { SavePointAction } from '../actions/SavePointAction';
import { RejectSavePointAction } from '../actions/RejectSavePointAction';
import { ApiImageService } from '../../api/services/api-image.service';
import { SavePointImageFulFill } from '../actions/SaveImageFulFill';

@Injectable()
export class PointEffects {
    public loadPoints$ = createEffect(() =>
        this.actions$.pipe(
            ofType(LoadPointsAction.type),
            switchMap(() =>
                this.apiEndpointPointService.getPoints().pipe(
                    map(points => new SetPointsAction(points)),
                    catchError(() => {
                        this.notificationService.error('Failed to load points');
                        return of(new RejectLoadPointsAction());
                    })
                )
            )
        )
    );

    public saveImage$ = createEffect(() =>
        this.actions$.pipe(
            ofType<SavePointAction>(SavePointAction.type),
            switchMap(action =>
                this.apiEndpointImageService
                    .uploadImage(action.point.imgFile)
                    .pipe(
                        map(
                            imageUrl =>
                                new SavePointImageFulFill({
                                    pointParameters: action.point,
                                    imageUrl,
                                })
                        ),
                        catchError(() => {
                            this.notificationService.error(
                                'Failed to upload image'
                            );
                            return of(new RejectSavePointAction());
                        })
                    )
            )
        )
    );

    public savePoint$ = createEffect(() =>
        this.actions$.pipe(
            ofType<SavePointImageFulFill>(SavePointImageFulFill.type),
            switchMap(action =>
                this.apiEndpointPointService
                    .save(
                        action.payload.pointParameters,
                        action.payload.imageUrl
                    )
                    .pipe(
                        map(point => new AddPointAction(point)),
                        catchError(() => {
                            this.notificationService.success(
                                'Failed to add point'
                            );
                            return of(new RejectSavePointAction());
                        })
                    )
            )
        )
    );

    public removePoint$ = createEffect(() =>
        this.actions$.pipe(
            ofType<TryToRemovePointAction>(TryToRemovePointAction.type),
            switchMap(action =>
                this.apiEndpointPointService.remove(action.id).pipe(
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
        private readonly apiEndpointPointService: ApiPointService,
        private readonly apiEndpointImageService: ApiImageService,
        private readonly notificationService: NotificationService
    ) {}
}
