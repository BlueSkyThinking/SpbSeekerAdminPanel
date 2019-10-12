import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { IdGeneratorService } from '../../services/id-generator.service';

@Component({
    selector: 'skr-file-upload',
    template: `
        <label [for]="id" class="file-upload">
            <input
                type="file"
                class="input"
                [id]="id"
                (change)="handleChange($event)"
            />

            <div class="grid">
                <div class="icon-container">
                    <skr-upload-icon></skr-upload-icon>
                </div>
                <div>Choose a file or drag it here</div>
                <div *ngIf="fileName.length">Chosen file: {{ fileName }}</div>
            </div>
        </label>
    `,
    styles: [
        `
            .file-upload {
                display: block;
                height: 100%;
                border: 0.1rem solid var(--color-border);
                border-radius: 0.2rem;
            }

            .input {
                width: 0.01rem;
                height: 0.01rem;
                opacity: 0;
                overflow: hidden;
                position: absolute;
                z-index: -1;
            }

            .grid {
                display: grid;
                grid-gap: 1rem;
                justify-items: center;
                align-content: center;
                height: 100%;
                color: var(--color-on-surface-secondary);
            }

            .icon-container {
                width: 6rem;
            }
        `,
    ],
})
export class FileUploadComponent {
    @Output() public changeFile: EventEmitter<File> = new EventEmitter();

    public id: string;
    public fileName = '';

    constructor(private readonly idGeneratorService: IdGeneratorService) {
        this.id = this.idGeneratorService.getID();
    }

    public handleChange(event: Event): void {
        event.preventDefault();
        const element = event.target as HTMLInputElement;
        const file: File = element.files[0];
        this.fileName = file.name;
        this.changeFile.emit(file);
    }

    @HostListener('window:drag', ['$event'])
    @HostListener('window:dragover', ['$event'])
    @HostListener('window:dragenter', ['$event'])
    public preventOpening(event: Event): void {
        event.preventDefault();
    }
}
