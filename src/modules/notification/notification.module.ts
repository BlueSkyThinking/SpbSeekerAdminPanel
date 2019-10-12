import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationContainerComponent } from './containers/notification-container/notification-container.component';
import { SuccessNotificationComponent } from './components/success-notification/success-notification.component';
import { ErrorNotificationComponent } from './components/error-notification/error-notification.component';
import { NotificationHostDirective } from './directives/notification-host.directive';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsModule } from '../icons/icons.module';

@NgModule({
    declarations: [
        NotificationContainerComponent,
        SuccessNotificationComponent,
        ErrorNotificationComponent,
        NotificationHostDirective,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        IconsModule,
    ],
    entryComponents: [SuccessNotificationComponent, ErrorNotificationComponent],
    exports: [NotificationContainerComponent],
})
export class NotificationModule {}
