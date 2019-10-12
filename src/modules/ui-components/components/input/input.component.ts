import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputType } from '../../enums/InputType';

@Component({
    selector: 'skr-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css'],
})
export class InputComponent {
    @Input() type: InputType;
    @Input() min: number;
    @Input() max: number;
    @Input() step: number;
    @Input() title: string;
    @Input() value: string;
    @Input() tooltip = '';
    @Input() disabled: boolean;

    @Output() oninput: EventEmitter<string | number> = new EventEmitter();
    @Output() onchange: EventEmitter<string | number> = new EventEmitter();

    public isSelect: boolean;

    constructor() {
        this.value = '';
        this.isSelect = false;
        this.type = InputType.TEXT;
        this.step = 1;
    }

    public toggleSelect(): void {
        this.isSelect = !this.isSelect;
    }

    public handleInput(event: Event): void {
        this.oninput.emit((event.target as HTMLInputElement).value);
    }

    public handleChange(event: Event): void {
        this.onchange.emit((event.target as HTMLInputElement).value);
        (event.target as HTMLInputElement).value = this.value;
    }
}
