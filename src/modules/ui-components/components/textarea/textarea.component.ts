import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'skr-textarea',
    template: `
        <div class="textarea">
            <div
                class="label"
                [class.active]="isFocus"
                [class.disabled]="disabled"
                *ngIf="label"
            >
                {{ label }}
            </div>
            <textarea
                [value]="value"
                [rows]="rows"
                [cols]="cols"
                [disabled]="disabled"
                [readOnly]="readonly"
                (input)="handleChange($event)"
                (focus)="handleFocus()"
                (blur)="handleBlur()"
            ></textarea>
        </div>
    `,
    styleUrls: ['./textarea.component.css'],
})
export class TextareaComponent {
    @Input() public value = '';
    @Input() public label: string;
    @Input() public disabled: boolean;
    @Input() public rows: number;
    @Input() public cols: number;
    @Input() public readonly: boolean;

    @Output() public onchange: EventEmitter<Event> = new EventEmitter();

    public isFocus: boolean;

    public handleChange(event: Event) {
        this.onchange.emit(event);
    }

    public handleFocus() {
        this.isFocus = true;
    }

    public handleBlur() {
        this.isFocus = false;
    }
}
