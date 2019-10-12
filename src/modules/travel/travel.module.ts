import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelListContainersComponent } from './containers/travel-list-containers/travel-list-containers.component';
import { TravelListComponent } from './components/travel-list/travel-list.component';
import { TravelListItemComponent } from './components/travel-list-item/travel-list-item.component';
import { UiComponentsModule } from '../ui-components/ui-components.module';

@NgModule({
    declarations: [
        TravelListContainersComponent,
        TravelListComponent,
        TravelListItemComponent,
    ],
    imports: [CommonModule, UiComponentsModule],
    exports: [TravelListComponent, TravelListContainersComponent],
})
export class TravelModule {}
