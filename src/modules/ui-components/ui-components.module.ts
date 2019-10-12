import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';

import { BlockComponent } from './components/block/block.component';
import { BlockHeaderComponent } from './components/block-header/block-header.component';
import { ButtonComponent } from './components/button/button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { TabComponent } from './components/tab/tab.component';
import { ToggleButtonComponent } from './components/toggle-button/toggle-button.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { TabViewComponent } from './components/tab-view/tab-view.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ColorSchemeComponent } from './components/color-scheme/color-scheme.component';
import { ModalFooterComponent } from './components/modal-footer/modal-footer.component';
import { ModalComponent } from './components/modal/modal.component';
import { IconsModule } from '../icons/icons.module';

@NgModule({
    imports: [CommonModule, FormsModule, DialogModule, IconsModule],
    declarations: [
        BlockComponent,
        BlockHeaderComponent,
        ButtonComponent,
        CheckboxComponent,
        ColorPickerComponent,
        InputComponent,
        SelectComponent,
        TabComponent,
        ToggleButtonComponent,
        TooltipComponent,
        TabViewComponent,
        ListItemComponent,
        DropdownComponent,
        ColorSchemeComponent,
        ModalComponent,
        ModalFooterComponent,
    ],
    exports: [
        BlockComponent,
        BlockHeaderComponent,
        ButtonComponent,
        CheckboxComponent,
        ColorPickerComponent,
        InputComponent,
        SelectComponent,
        TabComponent,
        ToggleButtonComponent,
        TooltipComponent,
        TabViewComponent,
        ListItemComponent,
        DropdownComponent,
        ColorSchemeComponent,
        ModalComponent,
        ModalFooterComponent,
    ],
})
export class UiComponentsModule {}
