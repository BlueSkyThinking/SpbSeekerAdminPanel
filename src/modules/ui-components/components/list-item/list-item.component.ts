import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'skr-list-item',
    template: `
        <div class="item" [class.disabled]="disabled" (click)="handleClick()">
            <ng-content></ng-content>
        </div>
    `,
    styles: [
        `
            .item {
                padding: 0.8rem;
                transition: background-color, color 0.2s ease;
                cursor: default;
            }

            .item:hover {
                background-color: var(--color-select-filled);
            }

            .disabled {
                color: var(--color-on-surface-secondary);
            }
        `,
    ],
})
export class ListItemComponent {
    @Input() public disabled = false;

    @Output() public onclick: EventEmitter<void> = new EventEmitter();

    public handleClick(): void {
        if (this.disabled === true) {
            return;
        }

        this.onclick.emit();
    }
}
