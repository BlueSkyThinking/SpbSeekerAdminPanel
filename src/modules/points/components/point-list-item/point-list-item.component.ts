import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPoint } from '../../interfaces/IPoint';

@Component({
    selector: 'skr-point-list-item',
    template: `
        <div class="item">
            <div class="image-wrapper">
                <div class="image"></div>
            </div>
            <div class="content">
                <div class="title">{{ point.name }}</div>
                <div>Short description: {{ point.shortDescription }}</div>
                <div>Description: {{ point.description }}</div>
                <div class="coordinates">
                    <div>Latitude: {{ point.latitude }}</div>
                    <div>Longitude: {{ point.longitude }}</div>
                </div>
                <div class="content-footer">
                    <div class="created-date">
                        Created: {{ point.createdDate | date: 'medium' }}
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

            .coordinates {
                display: grid;
                grid-auto-flow: column;
                justify-content: left;
                grid-gap: 2rem;
            }
        `,
    ],
})
export class PointListItemComponent {
    @Input() public point: IPoint;

    @Output() public remove: EventEmitter<void> = new EventEmitter();

    public handleRemove(): void {
        this.remove.emit();
    }
}
