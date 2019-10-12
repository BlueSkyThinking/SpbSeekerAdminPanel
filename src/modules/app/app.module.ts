import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { UiComponentsModule } from '../ui-components/ui-components.module';

import { LayoutComponent } from './components/layout/layout.component';
import { AppComponent } from './components/app/app.component';
import { AuthorizationModule } from '../authorization/authorization.module';
import { StoreModule } from '@ngrx/store';
import { globalReducer } from './reducers/globalReducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { AdminPanelLayoutComponent } from './components/admin-panel-layout/admin-panel-layout.component';
import { TravelModule } from '../travel/travel.module';

@NgModule({
    declarations: [AppComponent, LayoutComponent, AdminPanelLayoutComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot(globalReducer),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
        }),
        UiComponentsModule,
        AuthorizationModule,
        TravelModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
