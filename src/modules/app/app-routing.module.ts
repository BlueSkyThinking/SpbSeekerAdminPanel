import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginContainerComponent } from '../authorization/containers/login-container/login-container.component';
import { AuthGuard } from '../authorization/guard/auth.guard';
import { AdminPanelLayoutContainerComponent } from './containers/admin-panel-layout-container/admin-panel-layout-container.component';

const adminPanelRoutes: Routes = [
    { path: '**', component: AdminPanelLayoutContainerComponent },
];

const routes: Routes = [
    {
        path: 'adminPanel',
        component: AdminPanelLayoutContainerComponent,
        children: adminPanelRoutes,
        canActivate: [AuthGuard],
    },
    { path: 'login', component: LoginContainerComponent },
    { path: '**', component: LoginContainerComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
