import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    Renderer2,
    SimpleChanges,
    ViewChild,
} from '@angular/core';

@Component({
    selector: 'skr-toggle-button',
    templateUrl: './toggle-button.component.html',
    styleUrls: ['./toggle-button.component.css'],
})
export class ToggleButtonComponent implements AfterViewInit, OnChanges {
    @ViewChild('state', { static: true }) stateElement: ElementRef;
    @ViewChild('slider', { static: true }) sliderElement: ElementRef;

    @Input() pressed: boolean;
    @Input() firstState: string;
    @Input() secondState: string;
    @Input() disabled: boolean = false;

    @Output() onpress: EventEmitter<boolean>;

    constructor(private render: Renderer2) {
        this.onpress = new EventEmitter();
    }

    handleClick(): void {
        if (this.disabled === true) {
            return;
        }

        this.onpress.emit(this.pressed);
        this.moveSlider();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.pressed && typeof this.pressed === 'boolean') {
            this.moveSlider();
        }
    }

    moveSlider(): void {
        this.render.setStyle(
            this.sliderElement.nativeElement,
            'transform',
            `translateX(${
                this.pressed ? this.stateElement.nativeElement.clientWidth : 0
            }px)`
        );
    }

    ngAfterViewInit(): void {
        this.moveSlider();
    }
}
