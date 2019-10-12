import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HintListContainerComponent } from './containers/hint-list-container/hint-list-container.component';
import { HintListItemComponent } from './components/hint-list-item/hint-list-item.component';
import { UiComponentsModule } from '../ui-components/ui-components.module';
import { AddHintParametersContainerComponent } from './containers/add-hint-parameters/add-hint-parameters-container.component';
import { AddHintComponent } from './components/add-hint/add-hint.component';

@NgModule({
    declarations: [
        HintListContainerComponent,
        HintListItemComponent,
        AddHintParametersContainerComponent,
        AddHintComponent,
    ],
    exports: [HintListContainerComponent, AddHintParametersContainerComponent],
    imports: [CommonModule, UiComponentsModule],
})
export class HintsModule {}
