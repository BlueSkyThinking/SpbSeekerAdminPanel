import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ILoginParameters } from '../../interfaces/ILoginParameters';

@Component({
    selector: 'skr-login',
    template: `
        <div class="page">
            <skr-block class="block">
                <div class="grid">
                    <div class="title">SpbSeeker Admin Panel</div>
                    <skr-input
                        [label]="'Login:'"
                        [value]="loginParameters.login"
                        (onchange)="handleChangeLogin($event)"
                    ></skr-input>
                    <skr-input
                        [label]="'Password:'"
                        [value]="loginParameters.password"
                        (onchange)="handleChangePassword($event)"
                    ></skr-input>
                    <skr-button
                        type="accent"
                        class="login-button"
                        (click)="handleLogin()"
                    >
                        Login
                    </skr-button>
                </div>
            </skr-block>
        </div>
    `,
    styles: [
        `
            .page {
                display: grid;
                align-items: center;
                justify-items: center;
                height: 100%;
            }

            .block {
                width: 40rem;
            }

            .grid {
                display: grid;
                grid-gap: 1rem;
                padding: 1.5rem;
            }

            .title {
                text-align: center;
            }

            .login-button {
                width: 100%;
                height: 3.2rem;
            }
        `,
    ],
})
export class LoginComponent {
    @Input() public loginParameters: ILoginParameters;

    @Output() public changeLogin: EventEmitter<string> = new EventEmitter();
    @Output() public changePassword: EventEmitter<string> = new EventEmitter();
    @Output() public login: EventEmitter<void> = new EventEmitter();

    public handleChangeLogin(value: string): void {
        this.changeLogin.emit(value);
    }

    public handleChangePassword(value: string): void {
        this.changePassword.emit(value);
    }

    public handleLogin(): void {
        this.login.emit();
    }
}
