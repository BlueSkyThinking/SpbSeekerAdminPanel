import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IHintParameters } from '../../interfaces/IHintParameters';

@Component({
    selector: 'skr-add-hint',
    template: `
        <div class="grid">
            <div class="title">Create hint</div>
            <skr-input
                class="name"
                [label]="'Name'"
                [value]="hintParameters.name"
                (onchange)="handleChangeName($event)"
            ></skr-input>
            <skr-textarea
                class="short-description"
                [label]="'Short description'"
                [value]="hintParameters.shortDescription"
                [rows]="5"
                (onchange)="handleChangeShortDescription($event)"
            ></skr-textarea>
            <skr-textarea
                class="description"
                [label]="'Description'"
                [value]="hintParameters.description"
                [rows]="5"
                (onchange)="handleChangeDescription($event)"
            ></skr-textarea>
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
                grid-template-columns: 2fr 1fr;
                grid-template-areas:
                    'title .'
                    'name uploader'
                    'short-description uploader'
                    'description uploader'
                    'actions actions';
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

            .uploader {
                grid-area: uploader;
            }

            .actions {
                grid-area: actions;
            }
        `,
    ],
})
export class AddHintComponent {
    @Input() public hintParameters: IHintParameters;

    @Output() public changePointParameters: EventEmitter<
        IHintParameters
    > = new EventEmitter();
    @Output() public create: EventEmitter<IHintParameters> = new EventEmitter();

    public handleChangeName(value: string): void {
        this.changePointParameters.emit({
            ...this.hintParameters,
            name: value,
        });
    }

    public handleChangeShortDescription(event: Event): void {
        const element = event.target as HTMLInputElement;
        this.changePointParameters.emit({
            ...this.hintParameters,
            shortDescription: element.value,
        });
    }

    public handleChangeDescription(event: Event): void {
        const element = event.target as HTMLInputElement;
        this.changePointParameters.emit({
            ...this.hintParameters,
            description: element.value,
        });
    }

    public handleChangeFile(file: File): void {
        this.changePointParameters.emit({
            ...this.hintParameters,
            imgFiles: [file],
        });
    }

    public handleCreate(): void {
        this.create.emit();
    }
}
