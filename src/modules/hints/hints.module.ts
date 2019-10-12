import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HintListContainerComponent } from './containers/hint-list-container/hint-list-container.component';
import { HintListItemComponent } from './components/hint-list-item/hint-list-item.component';
import { UiComponentsModule } from '../ui-components/ui-components.module';

@NgModule({
    declarations: [HintListContainerComponent, HintListItemComponent],
    exports: [HintListContainerComponent],
    imports: [CommonModule, UiComponentsModule],
})
export class HintsModule {}
