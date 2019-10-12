import { Component } from '@angular/core';

@Component({
    selector: 'skr-block',
    template: `
        <div class="block"><ng-content></ng-content></div>
    `,
    styles: [
        `
            .block {
                background: var(--color-surface);
                border: 0.1rem solid var(--color-border);
                border-radius: 0.2rem;
                width: inherit;
                height: inherit;
                position: relative;
            }
        `,
    ],
})
export class BlockComponent {}
