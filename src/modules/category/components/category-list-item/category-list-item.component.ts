import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICategory } from '../../interfaces/ICategory';

@Component({
    selector: 'skr-category-list-item',
    template: `
        <div class="item">
            <div class="image-wrapper">
                <div class="image"></div>
            </div>
            <div class="content">
                <div class="title">{{ category.name }}</div>
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
                height: 5rem;
                width: 5rem;
                background-color: var(--color-on-surface-secondary);
            }

            .content {
                display: grid;
                grid-gap: 1rem;
                align-items: center;
            }

            .title {
                font-weight: bold;
            }

            .actions {
                display: grid;
                align-items: end;
                align-content: center;
            }
        `,
    ],
})
export class CategoryListItemComponent {
    @Input() public category: ICategory;

    @Output() public remove: EventEmitter<void> = new EventEmitter();

    public handleRemove(): void {
        this.remove.emit();
    }
}
