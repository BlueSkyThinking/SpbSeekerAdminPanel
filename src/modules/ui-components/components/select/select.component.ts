import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISelectOption } from '../../types/ISelectOption';
import { Position } from '../../enums/Position';

@Component({
    selector: 'skr-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.css'],
})
export class SelectComponent {
    @Input() options: ISelectOption[];
    @Input() value: string;
    @Input() label: string;
    @Input() tooltip = '';
    @Input() filled: boolean;
    @Input() disabled: boolean;
    @Input() titlePosition = Position.TOP;
    @Input() labelFontSize = 1.2;

    @Output() onselect: EventEmitter<string>;

    public isSelect: boolean;

    constructor() {
        this.onselect = new EventEmitter();
        this.isSelect = false;
    }

    public handleChange(event: Event): void {
        this.onselect.emit((event.target as HTMLSelectElement).value);
        (event.target as HTMLSelectElement).value = this.value;
    }

    public toggleSelect(): void {
        this.isSelect = !this.isSelect;
    }

    public get class() {
        return `title-${this.titlePosition}`;
    }
}
