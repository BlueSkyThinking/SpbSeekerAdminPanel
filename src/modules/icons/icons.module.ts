import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloseIconComponent } from './components/close-icon/close-icon.component';
import { UploadIconComponent } from './components/upload-icon/upload-icon.component';

@NgModule({
    imports: [CommonModule],
    declarations: [CloseIconComponent, UploadIconComponent],
    exports: [CloseIconComponent, UploadIconComponent],
})
export class IconsModule {}
