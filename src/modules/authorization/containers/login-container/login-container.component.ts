import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ILoginParameters } from '../../interfaces/ILoginParameters';
import { SetUserAction } from '../../actions/SetUserAction';
import { IRootState } from '../../../app/interfaces/IRootState';
import { Router } from '@angular/router';

@Component({
    selector: 'skr-login-container',
    template: `
        <skr-login
            [loginParameters]="loginParameters"
            (changeLogin)="handleChangeLogin($event)"
            (changePassword)="handleChangePassword($event)"
            (login)="login()"
        ></skr-login>
    `,
    styles: [],
})
export class LoginContainerComponent {
    public loginParameters: ILoginParameters = {
        login: '',
        password: '',
    };

    constructor(
        private readonly store: Store<IRootState>,
        private readonly router: Router
    ) {}

    public handleChangeLogin(value: string): void {
        this.loginParameters = {
            ...this.loginParameters,
            login: value,
        };
    }

    public handleChangePassword(value: string): void {
        this.loginParameters = {
            ...this.loginParameters,
            password: value,
        };
    }

    public login(): void {
        if (
            this.loginParameters.login.trim().length === 0 ||
            this.loginParameters.password.trim().length === 0
        ) {
            console.log('Invalid login or password');
        }

        this.store.dispatch(new SetUserAction(this.loginParameters));
        this.router.navigate(['/adminPanel']);
    }
}
