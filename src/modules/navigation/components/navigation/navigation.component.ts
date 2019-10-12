import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tab } from '../../enums/Tab';

@Component({
    selector: 'skr-navigation',
    template: `
        <div class="navigation">
            <div class="grid">
                <skr-tab
                    [active]="activeTab === tab.TRAVEL"
                    (onselect)="handleSelect(tab.TRAVEL)"
                >
                    Travels
                </skr-tab>
                <skr-tab
                    [active]="activeTab === tab.POINTS"
                    (onselect)="handleSelect(tab.POINTS)"
                >
                    Points
                </skr-tab>
                <skr-tab
                    [active]="activeTab === tab.HINTS"
                    (onselect)="handleSelect(tab.HINTS)"
                >
                    Hints
                </skr-tab>
                <skr-tab
                    [active]="activeTab === tab.CATEGORIES"
                    (onselect)="handleSelect(tab.CATEGORIES)"
                >
                    Categories
                </skr-tab>
            </div>
        </div>
    `,
    styles: [
        `
            .navigation {
                border-bottom: 0.1rem solid var(--color-border);
            }

            .grid {
                display: grid;
                grid-auto-flow: column;
                justify-content: left;
                height: 5rem;
            }
        `,
    ],
})
export class NavigationComponent {
    public readonly tab = Tab;

    @Input() public activeTab: Tab;

    @Output() public changeTab: EventEmitter<Tab> = new EventEmitter();

    public handleSelect(tab: Tab): void {
        this.changeTab.emit(tab);
    }
}
