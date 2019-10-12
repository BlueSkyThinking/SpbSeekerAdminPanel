import { Component } from '@angular/core';

@Component({
    selector: 'skr-layout',
    template: `
        <div class="layout">
            <router-outlet></router-outlet>
        </div>
    `,
    styles: [
        `
            .layout {
                background-color: var(--color-background);
                height: 100%;
            }
        `,
    ],
})
export class LayoutComponent {}
