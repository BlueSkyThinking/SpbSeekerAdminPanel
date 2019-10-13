import { Component } from '@angular/core';
import { ICategoryParameters } from '../../interfaces/ICategoryParameters';
import { IRootState } from '../../../app/interfaces/IRootState';
import { Store } from '@ngrx/store';
import { SaveCategoryAction } from '../../actions/SaveCategoryAction';

@Component({
    selector: 'skr-add-category-container',
    template: `
        <skr-add-category
            [addCategoryParameters]="addCategoryParameters"
            (changePointParameters)="handleChangeCategoryParameters($event)"
            (create)="handleCreate()"
        ></skr-add-category>
    `,
    styles: [],
})
export class AddCategoryContainerComponent {
    public addCategoryParameters: ICategoryParameters = {
        adminId: 1,
        name: '',
        imgUrl: '',
    };

    constructor(private readonly store: Store<IRootState>) {}

    public handleChangeCategoryParameters(value: ICategoryParameters): void {
        this.addCategoryParameters = value;
    }

    public handleCreate(): void {
        this.store.dispatch(new SaveCategoryAction(this.addCategoryParameters));
    }
}
