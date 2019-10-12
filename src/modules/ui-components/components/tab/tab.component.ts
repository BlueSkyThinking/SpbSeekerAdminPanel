import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'skr-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.css'],
})
export class TabComponent {
    @Input() public active: boolean;
    @Input() public disabled: boolean;

    @Output() public onselect: EventEmitter<void> = new EventEmitter();

    public handleClick(): void {
        if (!this.disabled) {
            this.onselect.emit();
        }
    }
}
