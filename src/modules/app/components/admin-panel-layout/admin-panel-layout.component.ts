import { Component } from '@angular/core';

@Component({
    selector: 'skr-admin-panel-layout',
    template: `
        <skr-block class="content">
            <skr-travel-list-containers></skr-travel-list-containers>
        </skr-block>
    `,
    styles: [
        `
            .content {
                height: 100%;
                width: 100%;
            }
        `,
    ],
})
export class AdminPanelLayoutComponent {}
