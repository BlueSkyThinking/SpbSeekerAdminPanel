import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PointListContainerComponent } from './containers/point-list-container/point-list-container.component';
import { PointListItemComponent } from './components/point-list-item/point-list-item.component';
import { UiComponentsModule } from '../ui-components/ui-components.module';

@NgModule({
    declarations: [PointListContainerComponent, PointListItemComponent],
    imports: [CommonModule, UiComponentsModule],
    exports: [PointListContainerComponent],
})
export class PointsModule {}
