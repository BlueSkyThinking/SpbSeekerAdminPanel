import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'skr-tab-view',
    template: `
        <div class="tab" [class.active]="active" (click)="handleClick()">
            <ng-content></ng-content>
        </div>
    `,
    styles: [
        `
            .tab {
                padding: 1.5rem 2rem 1.7rem 1.6rem;
                width: max-content;
                border-right: 0.1rem solid var(--color-border);
                color: var(--color-on-surface-secondary);
                transition: background-color 0.2s;
                user-select: none;
            }

            .active {
                background-color: var(--color-surface);
                color: var(--color-primary);
            }

            .tab:hover:not(.active) {
                background-color: var(--color-text-button-hover);
            }
        `,
    ],
})
export class TabViewComponent {
    @Input() public active: boolean;

    @Output() public onSelect: EventEmitter<void> = new EventEmitter();

    public handleClick(): void {
        this.onSelect.emit();
    }
}
