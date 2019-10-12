import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[skrNotificationHost]',
})
export class NotificationHostDirective {
    constructor(public readonly viewContainerRef: ViewContainerRef) {}
}
