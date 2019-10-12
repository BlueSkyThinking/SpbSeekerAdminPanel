import { Component } from '@angular/core';

@Component({
    selector: 'skr-root',
    template: `
        <skr-color-scheme [theme]="'light'">
            <skr-layout></skr-layout>
        </skr-color-scheme>
    `,
    styles: [``],
})
export class AppComponent {}
