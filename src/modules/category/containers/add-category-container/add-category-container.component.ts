import { Component } from '@angular/core';
import { ICategoryParameters } from '../../interfaces/ICategoryParameters';

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

    public handleChangeCategoryParameters(value: ICategoryParameters): void {
        this.addCategoryParameters = value;
    }

    public handleCreate(): void {
        console.log(this.addCategoryParameters);
    }
}
