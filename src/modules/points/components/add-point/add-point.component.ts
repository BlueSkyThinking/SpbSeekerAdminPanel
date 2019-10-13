import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPointParameters } from '../../interfaces/IPointParameters';

@Component({
    selector: 'skr-add-point',
    template: `
        <div class="grid">
            <div class="title">Create point</div>
            <skr-input
                class="name"
                [label]="'Name'"
                [value]="pointParameters.name"
                (onchange)="handleChangeName($event)"
            ></skr-input>
            <skr-textarea
                class="short-description"
                [label]="'Short description'"
                [value]="pointParameters.shortDescription"
                [rows]="5"
                (onchange)="handleChangeShortDescription($event)"
            ></skr-textarea>
            <skr-textarea
                class="description"
                [label]="'Description'"
                [value]="pointParameters.description"
                [rows]="5"
                (onchange)="handleChangeDescription($event)"
            ></skr-textarea>
            <skr-input
                class="latitude"
                label="Latitude"
                [value]="latitude"
                (onchange)="handleChangeLatitude($event)"
            ></skr-input>
            <skr-input
                class="longitude"
                label="Longitude"
                [value]="longitude"
                (onchange)="handleChangeLongitude($event)"
            ></skr-input>
            <skr-input
                class="order"
                label="Order"
                [value]="order"
                (onchange)="handleChangeOrderNum($event)"
            ></skr-input>
            <skr-file-upload
                class="uploader"
                (changeFile)="handleChangeFile($event)"
            ></skr-file-upload>
            <div class="actions">
                <skr-button type="accent" (onclick)="handleCreate()">
                    Create
                </skr-button>
            </div>
        </div>
    `,
    styles: [
        `
            .grid {
                display: grid;
                grid-gap: 1rem;
                grid-template-columns: 2fr 1fr 1fr 1fr;
                grid-template-areas:
                    'title . . .'
                    'name name name uploader'
                    'short-description short-description short-description uploader'
                    'description description description uploader'
                    'latitude longitude order .'
                    'actions actions actions actions';
                padding: 2rem;
                border-bottom: 0.1rem solid var(--color-border);
            }

            .title {
                grid-area: title;
                font-weight: bold;
            }

            .name {
                grid-area: name;
            }

            .short-description {
                grid-area: short-description;
            }

            .description {
                grid-area: description;
            }

            .latitude {
                grid-area: latitude;
            }

            .longitude {
                grid-area: longitude;
            }

            .order {
                grid-area: order;
            }

            .uploader {
                grid-area: uploader;
            }

            .actions {
                grid-area: actions;
            }
        `,
    ],
})
export class AddPointComponent {
    @Input() public pointParameters: IPointParameters;

    @Output() public changePointParameters: EventEmitter<
        IPointParameters
    > = new EventEmitter();
    @Output() public create: EventEmitter<void> = new EventEmitter();

    public handleChangeName(value: string): void {
        this.changePointParameters.emit({
            ...this.pointParameters,
            name: value,
        });
    }

    public handleChangeShortDescription(event: Event): void {
        const element = event.target as HTMLInputElement;
        this.changePointParameters.emit({
            ...this.pointParameters,
            shortDescription: element.value,
        });
    }

    public handleChangeDescription(event: Event): void {
        const element = event.target as HTMLInputElement;
        this.changePointParameters.emit({
            ...this.pointParameters,
            description: element.value,
        });
    }

    public handleChangeFile(file: File): void {
        this.changePointParameters.emit({
            ...this.pointParameters,
            imgFile: [file],
        });
    }

    public handleChangeLatitude(value: string): void {
        this.changePointParameters.emit({
            ...this.pointParameters,
            latitude: Number(value),
        });
    }

    public handleChangeLongitude(value: string): void {
        this.changePointParameters.emit({
            ...this.pointParameters,
            longitude: Number(value),
        });
    }

    public handleChangeOrderNum(value: string): void {
        this.changePointParameters.emit({
            ...this.pointParameters,
            orderNum: Number(value),
        });
    }

    public handleCreate(): void {
        this.create.emit();
    }

    public get latitude(): string {
        return String(this.pointParameters.latitude);
    }

    public get longitude(): string {
        return String(this.pointParameters.longitude);
    }

    public get order(): string {
        return String(this.pointParameters.orderNum);
    }
}
