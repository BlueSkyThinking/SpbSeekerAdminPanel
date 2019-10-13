import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiHintService } from '../../api/services/api-hint.service';
import { LoadHintsAction } from '../actions/LoadHintsAction';
import { catchError, map, switchMap } from 'rxjs/operators';
import { SetHintsAction } from '../actions/SetHintsAction';
import { RejectLoadHintsAction } from '../actions/RejectLoadHintsAction';
import { of } from 'rxjs';
import { NotificationService } from '../../notification/services/notification.service';
import { TryToRemoveHintAction } from '../actions/TryToRemoveHintAction';
import { RemoveHintAction } from '../actions/RemoveHintAction';
import { RejectRemoveHintAction } from '../actions/RejectRemoveHintAction';

@Injectable()
export class HintEffects {
    public loadHints$ = createEffect(() =>
        this.actions$.pipe(
            ofType(LoadHintsAction.type),
            switchMap(() =>
                this.apiHintEndpointService.getHints().pipe(
                    map(hints => new SetHintsAction(hints)),
                    catchError(() => {
                        this.notifivationService.error('Failed to load hints');
                        return of(new RejectLoadHintsAction());
                    })
                )
            )
        )
    );

    public removeHint$ = createEffect(() =>
        this.actions$.pipe(
            ofType<TryToRemoveHintAction>(TryToRemoveHintAction.type),
            switchMap(action =>
                this.apiHintEndpointService.remove(action.id).pipe(
                    map(() => new RemoveHintAction(action.id)),
                    catchError(() => {
                        this.notifivationService.error('Failed to remove hint');
                        return of(new RejectRemoveHintAction());
                    })
                )
            )
        )
    );

    constructor(
        private readonly actions$: Actions,
        private readonly apiHintEndpointService: ApiHintService,
        private readonly notifivationService: NotificationService
    ) {}
}
