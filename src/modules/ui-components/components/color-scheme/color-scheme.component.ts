import {
    Component,
    HostBinding,
    Input,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import { ColorScheme } from '../../enums/ColorScheme';

@Component({
    selector: 'skr-color-scheme',
    template: `
        <ng-content></ng-content>
    `,
    styleUrls: ['./color-scheme.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class ColorSchemeComponent implements OnInit {
    @Input() public theme: ColorScheme;

    @HostBinding('class.color-scheme')
    public common = true;

    @HostBinding('class.color-scheme__light')
    public light: boolean;

    @HostBinding('class.color-scheme__dark')
    public dark: boolean;

    @HostBinding('class.color-scheme__blue')
    public blue: boolean;

    public ngOnInit(): void {
        this.light = this.theme === ColorScheme.light;
        this.dark = this.theme === ColorScheme.dark;
        this.blue = this.theme === ColorScheme.blue;
    }
}
