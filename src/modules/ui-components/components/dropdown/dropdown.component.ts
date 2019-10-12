import {
    Component,
    ElementRef,
    EventEmitter,
    HostListener,
    Input,
    OnChanges,
    Output,
    SimpleChanges,
    ViewChild,
} from '@angular/core';
import autobind from 'autobind-decorator';

@Component({
    selector: 'skr-dropdown',
    template: `
        <div class="dropdown" [ngStyle]="style" #dropdown>
            <ng-content></ng-content>
        </div>
    `,
    styles: [
        `
            .dropdown {
                position: fixed;
                background: var(--color-dropdown-item);
                color: var(--color-on-surface-text);
                box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.2);
                border-radius: 0.2rem;
                width: inherit;
                height: inherit;
                z-index: 2;
                font-size: 1.4rem;
                text-align: left;
            }
        `,
    ],
})
export class DropdownComponent implements OnChanges {
    @ViewChild('dropdown', { static: true })
    private dropdownElement: ElementRef<HTMLDivElement>;

    @Input() public x: number;
    @Input() public y: number;

    @Output() public onclose: EventEmitter<boolean> = new EventEmitter();

    public dropdownX: number;
    public dropdownY: number;

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.x || changes.y) {
            this.dropdownX = this.x;
            this.dropdownY = this.y;
            setTimeout(this.changeDrawingDirectionIfOverlap);
        }
    }

    @HostListener('window:resize')
    @HostListener('document:click')
    @HostListener('document:wheel')
    @HostListener('document:contextmenu')
    public handleClose(): void {
        this.onclose.emit(true);
    }

    @autobind
    private changeDrawingDirectionIfOverlap(): void {
        const { documentElement } = document;

        const domRect: ClientRect = this.dropdownElement.nativeElement.getBoundingClientRect();
        const pageWidth = documentElement.clientWidth;

        if (this.dropdownX + domRect.width > pageWidth) {
            this.dropdownX = this.dropdownX - domRect.width;
        }
    }

    public get style(): { [key: string]: string } {
        return {
            left: `${this.dropdownX}px`,
            top: `${this.dropdownY}px`,
        };
    }
}
