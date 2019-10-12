import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListContainerComponent } from './containers/category-list-container/category-list-container.component';
import { CategoryListItemComponent } from './components/category-list-item/category-list-item.component';
import { UiComponentsModule } from '../ui-components/ui-components.module';
import { AddCategoryContainerComponent } from './containers/add-category-container/add-category-container.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';

@NgModule({
    declarations: [
        CategoryListContainerComponent,
        CategoryListItemComponent,
        AddCategoryContainerComponent,
        AddCategoryComponent,
    ],
    exports: [CategoryListContainerComponent, AddCategoryContainerComponent],
    imports: [CommonModule, UiComponentsModule],
})
export class CategoryModule {}
