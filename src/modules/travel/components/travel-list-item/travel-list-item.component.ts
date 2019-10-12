import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITravel } from '../../interfaces/ITravel';

@Component({
    selector: 'skr-travel-list-item',
    template: `
        <div class="item">
            <div class="image-wrapper">
                <div class="image"></div>
            </div>
            <div class="content">
                <div class="title">{{ travelItem.name }}</div>
                <div>Description: {{ travelItem.description }}</div>
                <div class="content-footer">
                    <div>Category: {{ travelItem.categoryName }}</div>
                    <div class="created-date">
                        Created: {{ travelItem.createdDate | date: 'medium' }}
                    </div>
                </div>
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
                grid-template-rows: auto 1fr auto;
            }

            .title {
                font-weight: bold;
            }

            .created-date {
                font-size: 1.2rem;
                color: var(--color-on-surface-secondary);
            }

            .actions {
                display: grid;
                align-items: end;
            }

            .content-footer {
                display: grid;
                grid-template-columns: 1fr auto;
                grid-gap: 1rem;
                align-items: center;
            }
        `,
    ],
})
export class TravelListItemComponent {
    @Input() public travelItem: ITravel;

    @Output() public remove: EventEmitter<void> = new EventEmitter();

    public handleRemove(): void {
        this.remove.emit();
    }
}
