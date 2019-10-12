import { AfterContentInit, Component, ViewChild } from '@angular/core';
import { NotificationHostDirective } from '../../directives/notification-host.directive';
import { NotificationService } from '../../services/notification.service';

@Component({
    selector: 'skr-notification-container',
    template: `
        <div class="wrapper">
            <ng-content></ng-content>
            <div class="notification-container">
                <div skrNotificationHost></div>
            </div>
        </div>
    `,
    styles: [
        `
            .wrapper {
                position: relative;
                height: 100%;
            }

            .notification-container {
                position: absolute;
                right: 0;
                bottom: 0;

                display: grid;
                grid-gap: 5px;
                width: max-content;
                padding-bottom: 25px;
                padding-right: 10px;
            }
        `,
    ],
})
export class NotificationContainerComponent implements AfterContentInit {
    @ViewChild(NotificationHostDirective, { static: true })
    private notificationContainer: NotificationHostDirective;

    constructor(private readonly notificationService: NotificationService) {}

    public ngAfterContentInit(): void {
        this.notificationService.setElementRef(this.notificationContainer);
    }
}
