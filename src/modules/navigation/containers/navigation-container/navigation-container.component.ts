import { Component } from '@angular/core';
import { IRootState } from '../../../app/interfaces/IRootState';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Tab } from '../../enums/Tab';
import { getActiveTab } from '../../selectors/getActiveTab';
import { SetActiveTab } from '../../actions/SetActiveTab';

@Component({
    selector: 'skr-navigation-container',
    template: `
        <skr-navigation
            [activeTab]="activeTab$ | async"
            (changeTab)="handleChangeTab($event)"
        ></skr-navigation>
    `,
    styles: [],
})
export class NavigationContainerComponent {
    public activeTab$: Observable<Tab>;

    constructor(public readonly store: Store<IRootState>) {
        this.activeTab$ = this.store.pipe(select(getActiveTab));
    }

    public handleChangeTab(tab: Tab): void {
        this.store.dispatch(new SetActiveTab(tab));
    }
}
