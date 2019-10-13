import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IHint } from '../../interfaces/IHint';

@Component({
    selector: 'skr-hint-list-item',
    template: `
        <div class="item">
            <div class="image-wrapper">
                <div class="image"></div>
            </div>
            <div class="content">
                <div class="title">{{ hint.name }}</div>
                <div>Short description: {{ hint.shortDescription }}</div>
                <div>Description: {{ hint.description }}</div>
            </div>
            <div class="actions">
                <skr-button type="accent" (onclick)="handleRemove()">
                    Remove
                </skr-button>
            </div>
        </div>
    `,
    styles: [
        `
            .item {
                display: grid;
                grid-template-columns: auto 1fr auto;
                grid-gap: 2rem;
                padding: 2rem;
                border-bottom: 1px solid var(--color-border);
            }

            .image {
                height: 100px;
                width: 100px;
                background-color: var(--color-on-surface-secondary);
            }

            .content {
                display: grid;
                grid-gap: 1rem;
                grid-template-rows: auto auto 1fr;
            }

            .title {
                font-weight: bold;
            }

            .actions {
                display: grid;
                align-items: end;
            }
        `,
    ],
})
export class HintListItemComponent {
    @Input() public hint: IHint;

    @Output() public remove: EventEmitter<void> = new EventEmitter();

    public handleRemove(): void {
        this.remove.emit();
    }
}
