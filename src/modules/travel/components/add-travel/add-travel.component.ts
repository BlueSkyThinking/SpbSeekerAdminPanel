import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    SimpleChanges,
} from '@angular/core';
import { ITravelParameters } from '../../interfaces/ITravelParameters';
import { ICategory } from '../../../category/interfaces/ICategory';
import { ISelectOption } from '../../../ui-components/types/ISelectOption';

@Component({
    selector: 'skr-add-travel',
    template: `
        <div class="grid">
            <div class="title">Create travel</div>
            <skr-input
                class="name"
                [label]="'Name'"
                [value]="addTravelParameters.name"
                (onchange)="handleChangeName($event)"
            ></skr-input>
            <skr-textarea
                class="description"
                [label]="'Description'"
                [value]="addTravelParameters.description"
                [rows]="5"
                (onchange)="handleChangeDescription($event)"
            ></skr-textarea>
            <skr-select
                class="category"
                [value]="category"
                [options]="categoryOptions"
                [label]="'Category'"
                (onselect)="handleChangeCategory($event)"
            ></skr-select>
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
                    'description uploader'
                    'category uploader'
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
export class AddTravelComponent implements OnChanges {
    @Input() public addTravelParameters: ITravelParameters;
    @Input() public categories: ICategory[];

    @Output() public changeTravelParameters: EventEmitter<
        ITravelParameters
    > = new EventEmitter();
    @Output() public create: EventEmitter<void> = new EventEmitter();

    public categoryOptions: ISelectOption[] = [];

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.categories) {
            this.categoryOptions = this.categories.map(category => ({
                caption: category.name,
                value: String(category.id),
            }));
        }
    }

    public handleChangeName(value: string): void {
        this.changeTravelParameters.emit({
            ...this.addTravelParameters,
            name: value,
        });
    }

    public handleChangeDescription(event: Event): void {
        const element = event.target as HTMLInputElement;
        this.changeTravelParameters.emit({
            ...this.addTravelParameters,
            description: element.value,
        });
    }

    public handleChangeCategory(value: string) {
        this.changeTravelParameters.emit({
            ...this.addTravelParameters,
            categoryId: value,
        });
    }

    public handleChangeFile(file: File) {
        this.changeTravelParameters.emit({
            ...this.addTravelParameters,
            imgUrl: [file],
        });
    }

    public handleCreate(): void {
        this.create.emit();
    }

    public get category() {
        return String(this.addTravelParameters.categoryId);
    }
}
