import { Component } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { notificationAnimation } from '../../common/animations';
import { notificationConfig } from '../../common/notificationConfig';

@Component({
    selector: 'skr-error-notification',
    template: `
        <div class="notification" [@openClose]="hidden ? 'void' : 'open'">
            <div class="icon-container">
                <skr-close-icon></skr-close-icon>
            </div>
            <div>{{ message }}</div>
            <div class="close-icon-container" (click)="handleClose()">
                <skr-close-icon></skr-close-icon>
            </div>
        </div>
    `,
    styles: [
        `
            .notification {
                position: relative;

                display: grid;
                grid-gap: 1rem;
                grid-template-columns: auto 1fr;
                background-color: var(--color-surface);
                padding: 1.5rem;
                width: 25rem;
                align-items: center;
                border-radius: 0.8rem;
                border-left: 0.4rem solid var(--color-remove-text);
                box-shadow: 0 0.8rem 2rem var(--color-big-shadow);
            }

            .icon-container {
                display: grid;
                border: 0.1rem solid currentColor;
                color: var(--color-remove-text);
                border-radius: 50%;
                width: 1.6rem;
                height: 1.6rem;
                align-content: end;
                justify-content: center;
            }

            .close-icon-container {
                position: absolute;
                top: 0.5rem;
                right: 1rem;
                width: 20px;
                color: var(--color-on-surface-secondary);
            }
        `,
    ],
    animations: [notificationAnimation(notificationConfig)],
})
export class ErrorNotificationComponent {
    public message = '';
    public notificationService: NotificationService;
    public hidden = false;

    public handleClose(): void {
        this.notificationService.detachComponent(this);
    }
}
