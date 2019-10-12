import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginContainerComponent } from './containers/login-container/login-container.component';
import { LoginComponent } from './components/login/login.component';
import { UiComponentsModule } from '../ui-components/ui-components.module';

@NgModule({
    imports: [CommonModule, UiComponentsModule],
    declarations: [LoginContainerComponent, LoginComponent],
    exports: [LoginComponent, LoginContainerComponent],
})
export class AuthorizationModule {}
