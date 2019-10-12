import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { IRootState } from '../../app/interfaces/IRootState';
import { getLoginUserState } from '../selectors/getLoginUserStatus';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    private readonly isUserExist$: Observable<boolean>;

    constructor(private readonly store: Store<IRootState>) {
        this.isUserExist$ = this.store.pipe(select(getLoginUserState));
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> {
        return this.isUserExist$;
    }
}
