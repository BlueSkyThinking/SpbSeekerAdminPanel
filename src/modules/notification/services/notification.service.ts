import { ComponentFactoryResolver, Injectable, Type } from '@angular/core';
import { SuccessNotificationComponent } from '../components/success-notification/success-notification.component';
import { ErrorNotificationComponent } from '../components/error-notification/error-notification.component';
import { NotificationHostDirective } from '../directives/notification-host.directive';
import { notificationConfig } from '../common/notificationConfig';

@Injectable({
    providedIn: 'root',
})
export class NotificationService {
    private notificationContainer: NotificationHostDirective;
    private notifications = [];

    constructor(
        private readonly componentFactoryResolver: ComponentFactoryResolver
    ) {}

    public success(message: string) {
        this.attachComponent(SuccessNotificationComponent, message);
    }

    public error(message: string) {
        this.attachComponent(ErrorNotificationComponent, message);
    }

    public attachComponent<T>(component: Type<T>, message: string) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
            component
        );
        const viewContainerRef = this.notificationContainer.viewContainerRef;
        const componentRef = viewContainerRef.createComponent(componentFactory);
        const notificationComponent = componentRef.instance;
        (notificationComponent as any).message = message;
        (notificationComponent as any).notificationService = this;

        this.notifications = [...this.notifications, notificationComponent];

        setTimeout(() => {
            (notificationComponent as any).hidden = true;
        }, notificationConfig.lifetime - notificationConfig.disappearanceTime);

        setTimeout(
            () => this.detachComponent(notificationComponent),
            notificationConfig.lifetime
        );
    }

    public detachComponent(notification: any) {
        const notificationIndex = this.notifications.indexOf(notification);
        this.notificationContainer.viewContainerRef.remove(notificationIndex);
        this.notifications = this.notifications.filter(
            item => item !== notification
        );
    }

    public setElementRef(hostElement: NotificationHostDirective) {
        this.notificationContainer = hostElement;
    }
}
