import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PointListContainerComponent } from './containers/point-list-container/point-list-container.component';
import { PointListItemComponent } from './components/point-list-item/point-list-item.component';
import { UiComponentsModule } from '../ui-components/ui-components.module';
import { AddPointComponent } from './components/add-point/add-point.component';
import { AddPointContainerComponent } from './containers/add-point-container/add-point-container.component';
import { EffectsModule } from '@ngrx/effects';
import { PointEffects } from './effects/point.effects';

@NgModule({
    declarations: [
        PointListContainerComponent,
        PointListItemComponent,
        AddPointComponent,
        AddPointContainerComponent,
    ],
    imports: [
        CommonModule,
        UiComponentsModule,
        EffectsModule.forFeature([PointEffects]),
    ],
    exports: [PointListContainerComponent, AddPointContainerComponent],
})
export class PointsModule {}
