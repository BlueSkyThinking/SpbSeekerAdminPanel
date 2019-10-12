import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'skr-color-picker',
    templateUrl: './color-picker.component.html',
    styleUrls: ['./color-picker.component.css'],
})
export class ColorPickerComponent {
    @Input() colors: string[];
    @Input() selectedColor: string;

    @Output() onselect: EventEmitter<string>;

    constructor() {
        this.onselect = new EventEmitter();
    }

    selectColor(color: string) {
        this.selectedColor = color;
        this.onselect.emit(color);
    }
}
