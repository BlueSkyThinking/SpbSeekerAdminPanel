import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { ApiTravelService } from '../../api/services/api-travel.service';
import { LoadTravelsAction } from '../actions/LoadTravelsAction';
import { catchError, map, switchMap } from 'rxjs/operators';
import { SetTravelsAction } from '../actions/SetTravelsAction';
import { NotificationService } from '../../notification/services/notification.service';
import { of } from 'rxjs';
import { RejectLoadTravelsAction } from '../actions/RejectLoadTravelsAction';
import { TryToRemoveTravelAction } from '../actions/TryToRemoveTravelAction';
import { RemoveTravelAction } from '../actions/RemoveTravelAction';
import { RejectRemoveTravel } from '../actions/RejectRemoveTravel';
import { SaveTravelAction } from '../actions/SaveTravelAction';
import { RejectSaveTravelAction } from '../actions/RejectSaveTravelAction';
import { AddTravelAction } from '../actions/AddTravelAction';

@Injectable()
export class TravelEffects {
    public loadTravels$ = createEffect(() =>
        this.actions$.pipe(
            ofType(LoadTravelsAction.type),
            switchMap(() =>
                this.apiTravelEndpointService.getTravels().pipe(
                    map(travels => new SetTravelsAction(travels)),
                    catchError(() => {
                        this.notificationService.error(
                            'Failed to load travels'
                        );
                        return of(new RejectLoadTravelsAction());
                    })
                )
            )
        )
    );

    public removeTravel$ = createEffect(() =>
        this.actions$.pipe(
            ofType<TryToRemoveTravelAction>(TryToRemoveTravelAction.type),
            switchMap(action =>
                this.apiTravelEndpointService.remove(action.id).pipe(
                    map(() => new RemoveTravelAction(action.id)),
                    catchError(() => {
                        this.notificationService.error(
                            'Failed to remove travel'
                        );
                        return of(new RejectRemoveTravel());
                    })
                )
            )
        )
    );

    public saveTravel$ = createEffect(() =>
        this.actions$.pipe(
            ofType<SaveTravelAction>(SaveTravelAction.type),
            switchMap(action =>
                this.apiTravelEndpointService.save(action.parameters).pipe(
                    map(travel => {
                        this.notificationService.success(
                            'Travel successfully added'
                        );
                        return new AddTravelAction(travel);
                    }),
                    catchError(() => {
                        this.notificationService.error('Failed to save travel');
                        return of(new RejectSaveTravelAction());
                    })
                )
            )
        )
    );

    constructor(
        private readonly actions$: Actions,
        private readonly apiTravelEndpointService: ApiTravelService,
        private readonly notificationService: NotificationService
    ) {}
}

class TravelEffectsImpl extends TravelEffects {}
