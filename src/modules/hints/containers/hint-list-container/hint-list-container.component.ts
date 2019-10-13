import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IHint } from '../../interfaces/IHint';
import { IRootState } from '../../../app/interfaces/IRootState';
import { select, Store } from '@ngrx/store';
import { getHints } from '../../selectors/getHints';
import { LoadHintsAction } from '../../actions/LoadHintsAction';
import { TryToRemoveHintAction } from '../../actions/TryToRemoveHintAction';

@Component({
    selector: 'skr-hint-list-container',
    template: `
        <skr-hint-list-item
            *ngFor="let hint of hints$ | async"
            [hint]="hint"
            (remove)="handleRemove(hint.id)"
        ></skr-hint-list-item>
    `,
    styles: [],
})
export class HintListContainerComponent {
    public hints$: Observable<IHint[]>;

    constructor(private readonly store: Store<IRootState>) {
        this.hints$ = this.store.pipe(select(getHints));
        this.store.dispatch(new LoadHintsAction());
    }

    public handleRemove(id: IHint['id']) {
        this.store.dispatch(new TryToRemoveHintAction(id));
    }
}
