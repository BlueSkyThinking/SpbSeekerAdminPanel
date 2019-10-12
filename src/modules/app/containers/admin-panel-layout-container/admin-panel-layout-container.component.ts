import { Component } from '@angular/core';
import { IRootState } from '../../interfaces/IRootState';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Tab } from '../../../navigation/enums/Tab';
import { getActiveTab } from '../../../navigation/selectors/getActiveTab';

@Component({
    selector: 'skr-admin-panel-layout-container',
    template: `
        <skr-block class="content">
            <div [ngSwitch]="activeTab$ | async">
                <skr-navigation-container></skr-navigation-container>
                <div *ngSwitchCase="tab.TRAVEL">
                    <skr-add-travel-container></skr-add-travel-container>
                    <skr-travel-list-containers></skr-travel-list-containers>
                </div>
                <div *ngSwitchCase="tab.POINTS"></div>
                <div *ngSwitchCase="tab.HINTS"></div>
            </div>
        </skr-block>
    `,
    styles: [
        `
            .content {
                height: 100%;
                width: 100%;
            }
        `,
    ],
})
export class AdminPanelLayoutContainerComponent {
    public readonly tab = Tab;

    public activeTab$: Observable<Tab>;

    constructor(private readonly store: Store<IRootState>) {
        this.activeTab$ = this.store.pipe(select(getActiveTab));
    }
}
