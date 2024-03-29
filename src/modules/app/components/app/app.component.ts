import { Component } from '@angular/core';

@Component({
    selector: 'skr-root',
    template: `
        <skr-color-scheme [theme]="'blue'">
            <skr-notification-container>
                <skr-layout></skr-layout>
            </skr-notification-container>
        </skr-color-scheme>
    `,
    styles: [``],
})
export class AppComponent {}
