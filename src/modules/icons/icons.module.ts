import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloseIconComponent } from './components/close-icon/close-icon.component';

@NgModule({
    imports: [CommonModule],
    declarations: [CloseIconComponent],
    exports: [CloseIconComponent],
})
export class IconsModule {}
