import { Component, ElementRef, HostBinding, Input } from '@angular/core';

@Component({
    selector: 'skr-tooltip',
    template: `
        <ng-content></ng-content>
    `,
    styles: [
        `
            :host {
                position: absolute;
                z-index: 3;

                padding: 0.8rem;
                border-radius: 0.2rem;

                background-color: var(--color-surface);

                user-select: none;
                pointer-events: none;

                box-shadow: 0 0.2rem 0.8rem var(--color-big-shadow);
            }
        `,
    ],
})
export class TooltipComponent {
    @Input() public x: number;
    @Input() public y: number;
    @Input() public offsetX: number = 0;
    @Input() public offsetY: number = 0;

    public constructor(private elementReference: ElementRef<HTMLElement>) {}

    @HostBinding('style.transform')
    public get transform(): string {
        const height = this.elementReference.nativeElement.offsetHeight;

        return `
            translate(${this.x + this.offsetX}px, ${this.y + this.offsetY}px)
        `;
    }
}
