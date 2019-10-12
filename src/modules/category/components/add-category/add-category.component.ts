import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICategoryParameters } from '../../interfaces/ICategoryParameters';

@Component({
    selector: 'skr-add-category',
    template: `
        <div class="grid">
            <div class="title">Create category</div>
            <skr-input
                class="name"
                [label]="'Name'"
                [value]="addCategoryParameters.name"
                (onchange)="handleChangeName($event)"
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
                grid-template-columns: 2fr 1fr;
                grid-template-areas:
                    'title .'
                    'name uploader'
                    'actions uploader';
                height: 20rem;
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

            .description {
                grid-area: description;
            }

            .category {
                grid-area: category;
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
export class AddCategoryComponent {
    @Input() public addCategoryParameters: ICategoryParameters;

    @Output() public changePointParameters: EventEmitter<
        ICategoryParameters
    > = new EventEmitter();
    @Output() public create: EventEmitter<void> = new EventEmitter();

    public handleChangeName(value: string): void {
        this.changePointParameters.emit({
            ...this.addCategoryParameters,
            name: value,
        });
    }

    public handleChangeFile(file: File): void {
        this.changePointParameters.emit({
            ...this.addCategoryParameters,
            imgUrl: file.name,
        });
    }

    public handleCreate(): void {
        this.create.emit();
    }
}
