import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelListContainersComponent } from './containers/travel-list-containers/travel-list-containers.component';
import { TravelListItemComponent } from './components/travel-list-item/travel-list-item.component';
import { UiComponentsModule } from '../ui-components/ui-components.module';
import { AddTravelContainerComponent } from './containers/add-travel-container/add-travel-container.component';
import { AddTravelComponent } from './components/add-travel/add-travel.component';

@NgModule({
    declarations: [
        TravelListContainersComponent,
        TravelListItemComponent,
        AddTravelContainerComponent,
        AddTravelComponent,
    ],
    imports: [CommonModule, UiComponentsModule],
    exports: [TravelListContainersComponent, AddTravelContainerComponent],
})
export class TravelModule {}
