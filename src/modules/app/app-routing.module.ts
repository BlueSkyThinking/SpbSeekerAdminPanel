import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginContainerComponent } from '../authorization/containers/login-container/login-container.component';
import { AdminPanelLayoutComponent } from './components/admin-panel-layout/admin-panel-layout.component';
import { AuthGuard } from '../authorization/guard/auth.guard';

const adminPanelRoutes: Routes = [
    { path: '**', component: AdminPanelLayoutComponent },
];

const routes: Routes = [
    {
        path: 'adminPanel',
        component: AdminPanelLayoutComponent,
        children: adminPanelRoutes,
        canActivate: [AuthGuard],
    },
    { path: 'login', component: LoginContainerComponent },
    // { path: '**', component: LoginContainerComponent },
    { path: '**', component: AdminPanelLayoutComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
