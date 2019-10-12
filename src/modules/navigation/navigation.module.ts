import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponentsModule } from '../ui-components/ui-components.module';
import { NavigationContainerComponent } from './containers/navigation-container/navigation-container.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
    imports: [CommonModule, UiComponentsModule],
    declarations: [NavigationContainerComponent, NavigationComponent],
    exports: [NavigationContainerComponent],
})
export class NavigationModule {}
