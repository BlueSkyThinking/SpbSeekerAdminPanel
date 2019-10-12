import { Component, Input } from '@angular/core';

@Component({
    selector: 'skr-block',
    templateUrl: './block.component.html',
    styleUrls: ['./block.component.css'],
})
export class BlockComponent {
    @Input() width: string;

    constructor() {
        this.width = 'max-content';
    }
}
