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
                display: grid;
                grid-template-rows: auto 1fr;
                background-color: var(--color-background);
                height: 100%;
            }
        `,
    ],
})
export class LayoutComponent {}
