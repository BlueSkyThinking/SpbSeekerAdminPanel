import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { UiComponentsModule } from '../ui-components/ui-components.module';

import { LayoutComponent } from './components/layout/layout.component';
import { AppComponent } from './components/app/app.component';
import { AuthorizationModule } from '../authorization/authorization.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { globalReducer } from './reducers/globalReducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { TravelModule } from '../travel/travel.module';
import { NavigationModule } from '../navigation/navigation.module';
import { AdminPanelLayoutContainerComponent } from './containers/admin-panel-layout-container/admin-panel-layout-container.component';
import { PointsModule } from '../points/points.module';
import { CategoryModule } from '../category/category.module';
import { HintsModule } from '../hints/hints.module';
import { NotificationModule } from '../notification/notification.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        StoreModule.forRoot(globalReducer),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
        }),
        EffectsModule.forRoot([]),
        UiComponentsModule,
        AuthorizationModule,
        TravelModule,
        NavigationModule,
        PointsModule,
        CategoryModule,
        HintsModule,
        NotificationModule,
    ],
    declarations: [
        AppComponent,
        LayoutComponent,
        AdminPanelLayoutContainerComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
