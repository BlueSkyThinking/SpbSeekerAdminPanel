import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'skr-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
    @Input() disabled: boolean;
    @Input() type: '' | 'bordered' | 'accent' = '';
    @Input() tooltip = '';

    @Output() onclick: EventEmitter<Event>;

    constructor() {
        this.onclick = new EventEmitter();
    }

    handleClick(event: Event): void {
        this.onclick.emit(event);
    }
}
