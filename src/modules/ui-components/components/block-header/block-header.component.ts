import { Component } from '@angular/core';

@Component({
    selector: 'skr-block-header',
    template: `
        <ng-content></ng-content>
    `,
    styles: [
        `
            :host {
                font-size: 1.4rem;
                font-weight: bold;
                line-height: 2.4rem;
                color: var(--color-on-surface-secondary);
            }
        `,
    ],
})
export class BlockHeaderComponent {}
