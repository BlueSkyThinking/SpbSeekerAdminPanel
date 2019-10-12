import { Component } from '@angular/core';

@Component({
    selector: 'skr-modal-footer',
    template: `
        <div class="container left">
            <ng-content select="[left]"></ng-content>
        </div>
        <div class="container right">
            <ng-content select="[right]"></ng-content>
        </div>
    `,
    styles: [
        `
            :host {
                display: grid;
                margin-top: 0.8rem;
                grid-gap: 0.8rem;
                grid-auto-flow: column;
                align-items: center;
            }

            .container {
                display: grid;
                grid-gap: 0.8rem;
                grid-auto-flow: column;
                width: fit-content;
            }

            .left {
                justify-self: start;
            }

            .right {
                justify-self: end;
            }
        `,
    ],
})
export class ModalFooterComponent {}
